/*
 * Grunt String to JS
 * Copyright (c) 2013 Zach Gohr
 */
var path = require('path');

var str2js = function (str) {
    return str.replace(/'/g, "\\'").replace(/\r\n|\r|\n/g, "\\n");
};

module.exports = function (grunt) {
    grunt.registerMultiTask('str2js', 'Convert text to JavaScript.', function () {

        var options = this.options({
            initialize: true,
            namespace: [this.target]
        });

        if (options.namespace.length < 1) {
            grunt.fail.fatal('"namespace" option must be an array which contains at least one string.');
        }

        this.files.forEach(function (file) {
            var str = '';
            if (options.initialize) {
                var namespace = '';

                str += 'var ';
                options.namespace.forEach(function (identifier) {
                    namespace = (namespace ? namespace + '.' : '') + identifier;
                    str += namespace + ' = ' + namespace + ' || {};\n';
                });

            }
            file.src.forEach(function (filepath) {
                var resolvedpath;
                if (file.cwd) {
                    resolvedpath = path.join(file.cwd, filepath);
                } else {
                    resolvedpath = filepath;
                }
                if (!grunt.file.exists(resolvedpath)) {
                    grunt.fail.warn('Source file "' + resolvedpath + '" not found.');
                } else {
                    str += options.namespace.join('.') + '["' + filepath + '"] = ';
                    str += "'" + str2js(grunt.file.read(resolvedpath)) + "';\n";
                }
            });
            grunt.file.write(file.dest, str);
        });
    });
};