var fs = require('fs');
var unzip = require('unzip');

fs.readFile('path/to/archive.zip', function (err, zipContents) {
  unzip.Parse(zipContents).on('entry', function (entry) {
    var fileName = 'output/path/' + entry.path;
    fs.writeFile(fileName, entry.contents, function (err) {
      if (err) throw err;
      console.log('Extracted ' + fileName);
    });
  });
});
