# grunt-string-to-js

### Build any text into JavaScript

```
npm install grunt-string-to-js --save
```

```
str2js: {
  options: {
    namespace: 'NS'
  },
  build: { 'test/build.js': ['test/html.html']}
}
```

### Options

```namespace``` is the dictionary that JavaScript is compiled to. For instance, the above configuration will generate a single file, ```test/build.js``` with a variable ```NS["test/html.html"]``` that holds the HTML found in the file.

### Credits

Credit for the regex goes to https://github.com/visionmedia/node-string-to-js
