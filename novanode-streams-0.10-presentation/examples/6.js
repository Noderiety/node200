var fs = require('fs');
var unzip = require('unzip');

var parser = unzip.Parse();
var fileDataEmitter = fs.readFile('path/to/archive.zip')
  .on('data', function(data) {
    parser.write(data);   
  });

parser.on('entry', function (entry) {
  var fileName = 'output/path/' + entry.path;
  entry.on('data', function(data) {
    fs.appendFile(fileName, entry.contents, function (err) {
      if (err) onError(err);
    });
  });
});

fileDataEmitter.on('error', function(err) {
  onError(err);
}
parser.on('error', function(err) {
  onError(err);
}
