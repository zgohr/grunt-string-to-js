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

### Credits

Credit for the regex goes to https://github.com/visionmedia/node-string-to-js
