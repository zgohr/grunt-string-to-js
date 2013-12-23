# grunt-string-to-js

### Build any text into JavaScript

```npm install grunt-string-to-js --save``

Grunt configuration

Specifying files can be achieved [in various ways](http://gruntjs.com/configuring-tasks).
This includes specifying a current working directory (i.e. `cwd` property) which may be helpful if you wish to exclude paths.

```
str2js: {
    NS: {
        files: {
            'test/build.js': ['test/html.html']
        }
    }
    }
```

Turns ```test/test.html```

```
<div class="foo">
    <p class="bar">baz</p>
</div>
```

into ```test/build.js```

```
var NS = NS || {};
NS["test/html.html"] = '<div class="foo">\n    <p class="bar">baz</p>\n</div>\n';
```

### Options
Options can be set as documented [here](http://gruntjs.com/api/grunt.option).

`initialize` - Default is true. Specifying false will not generate any initialization code and you will be expected to create the appropriate objects yourself.

`namespace` - Defaults to the grunt target. (e.g. 'NS'). Specifying an array of names will allow you to assign values to a custom namespace. (e.g. `['custom', 'namespace']` -> `custom.namespace[]`)

### Credits

Credit for the regex goes to https://github.com/visionmedia/node-string-to-js
