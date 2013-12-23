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
        var namespace = this.target;

        this.files.forEach(function (file) {
            var str = 'var ' + namespace + ' = ' + namespace + ' || {};\n';
            file.src.forEach(function (filepath) {
                var resolvedpath;
                if (file.cwd) {
                    resolvedpath = path.join(file.cwd, filepath);
                } else {
                    resolvedpath = filepath;
                }
                if (!grunt.file.exists(resolvedpath)) {
                    grunt.log.warn('Source file "' + resolvedpath + '" not found.');
                } else {
                    str += namespace + '["' + filepath + '"] = ';
                    str += "'" + str2js(grunt.file.read(resolvedpath)) + "';\n";
                }
            });
            grunt.file.setBase('.');
            grunt.file.write(file.dest, str);
        });
    });
};