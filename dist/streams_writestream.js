"use strict";
require('traceur-source-maps').install(require('traceur'));
var http = require('http');
var fs = require('fs');
var server = http.createServer((function(req, res) {
  req.pipe(fs.createWriteStream(__dirname + '/data.txt'));
}));
server.listen(8000);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmVhbXNfd3JpdGVzdHJlYW0uZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsSUFBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDO0VBQ2hGLENBQUEsRUFBQyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsSUFBRyxDQUFDO0VBRWpCLENBQUEsTUFBSyxFQUFJLENBQUEsSUFBRyxhQUFhLEFBQUMsRUFBQyxTQUFDLEdBQUUsQ0FBRyxDQUFBLEdBQUUsQ0FBTTtBQUN6QyxJQUFFLEtBQUssQUFBQyxDQUFDLEVBQUMsa0JBQWtCLEFBQUMsQ0FBQyxTQUFRLEVBQUksWUFBVSxDQUFDLENBQUMsQ0FBQTtBQUMxRCxFQUFDO0FBQ0QsS0FBSyxPQUFPLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQTtBQUNsQiIsImZpbGUiOiJzdHJlYW1zX3dyaXRlc3RyZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKVxubGV0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG5sZXQgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVxLnBpcGUoZnMuY3JlYXRlV3JpdGVTdHJlYW0oX19kaXJuYW1lICsgJy9kYXRhLnR4dCcpKVxufSlcbnNlcnZlci5saXN0ZW4oODAwMClcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==