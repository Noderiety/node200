"use strict";
require('traceur-source-maps').install(require('traceur'));
var http = require('http'),
    trycatch = require('trycatch').configure({'long-stack-traces': true});
http.createServer((function(req, res) {
  console.log('Handling request...');
  trycatch((function() {
    setTimeout(function() {
      throw new Error('Fail.');
    }, 1000);
  }), (function(err) {
    res.writeHead(500);
    res.end(err.stack);
  }));
})).listen(8000);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3NfdHJ5Y2F0Y2hzZXJ2ZXIuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsSUFBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDO0FBQ2pGLFdBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQyxVQUFVLEFBQUMsQ0FBQyxDQUFDLG1CQUFrQixDQUFFLEtBQUcsQ0FBQyxDQUFDO0FBRXRFLEdBQUcsYUFBYSxBQUFDLEVBQUMsU0FBQyxHQUFFLENBQUcsQ0FBQSxHQUFFO0FBQ3pCLFFBQU0sSUFBSSxBQUFDLENBQUMscUJBQW9CLENBQUMsQ0FBQTtBQUNqQyxTQUFPLEFBQUMsRUFBQyxTQUFBLEFBQUMsQ0FBSztBQUNkLGFBQVMsQUFBQyxDQUFDLFNBQVEsQUFBQyxDQUFFO0FBQ3JCLFVBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQTtJQUN4QixDQUFHLEtBQUcsQ0FBQyxDQUFBO0VBQ1IsSUFBRyxTQUFBLEdBQUUsQ0FBSztBQUNULE1BQUUsVUFBVSxBQUFDLENBQUMsR0FBRSxDQUFDLENBQUE7QUFDakIsTUFBRSxJQUFJLEFBQUMsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFBO0VBQ2xCLEVBQUMsQ0FBQTtBQUNGLEVBQUMsT0FBTyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUE7QUFDZCIsImZpbGUiOiJleHByZXNzX3RyeWNhdGNoc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKVxuXHQsIHRyeWNhdGNoID0gcmVxdWlyZSgndHJ5Y2F0Y2gnKS5jb25maWd1cmUoeydsb25nLXN0YWNrLXRyYWNlcyc6dHJ1ZX0pXG5cbmh0dHAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xuXHRjb25zb2xlLmxvZygnSGFuZGxpbmcgcmVxdWVzdC4uLicpXG5cdHRyeWNhdGNoKCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGYWlsLicpXG5cdFx0fSwgMTAwMClcblx0fSwgZXJyID0+IHtcblx0XHRyZXMud3JpdGVIZWFkKDUwMClcblx0XHRyZXMuZW5kKGVyci5zdGFjaylcblx0fSlcbn0pLmxpc3Rlbig4MDAwKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9