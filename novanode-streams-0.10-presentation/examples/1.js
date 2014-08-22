var fs = require('fs');
var unzip = require('unzip');

var zipFile = fs.readFileSync('path/to/archive.zip');
var parsedZip = unzip.parseSync(zipFile);
fs.writeFileSync('output/path');

