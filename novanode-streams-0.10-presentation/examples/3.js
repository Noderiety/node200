var fs = require('fs');
var unzip = require('unzip');

fs.readFile('path/to/archive.zip', function (err, zipContents) {
  if (err) throw err;
  unzip.Parse(zipContents, function (err, parsedZip) {
    if (err) throw err;
    fs.writeFile('output/path', parsedZip, function (err) {
      if (err) throw err;
      console.log('Extracted!');
    });
  });
});
