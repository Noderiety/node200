var fs = require('fs');
var unzip = require('unzip');

fs.readFile('path/to/archive.zip', function (zipContents) {
  unzip.Parse(zipContents, function (parsedZip) {
    fs.writeFile('output/path', parsedZip, function () {
      console.log('Extracted!');
    });
  });
});
