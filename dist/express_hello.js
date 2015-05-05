"use strict";
require('traceur-source-maps').install(require('traceur'));
var express = require('express'),
    argv = require('yargs').argv,
    port = argv.port || 8000,
    host = '127.0.0.1',
    app = express();
app.use(require('morgan')('combined'));
app.use(require('serve-favicon')(__dirname + '/../static/favicon.ico'));
app.use(require('serve-static')(__dirname + '/../static', {'index': false}));
app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());
app.use(require('body-parser').text());
app.all('/echo/', (function(req, res) {
  req.pipe(res);
}));
app.get('/', (function(req, res) {
  res.send('Hello world');
}));
app.listen(port, host, (function() {
  console.log('Server at %s listening on %s', host, port);
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3NfaGVsbG8uZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsT0FBTSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDO0FBQ3ZGLE9BQUcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLE9BQU0sQ0FBQyxLQUFLO0FBQzNCLE9BQUcsRUFBSSxDQUFBLElBQUcsS0FBSyxHQUFLLEtBQUc7QUFDdkIsT0FBRyxFQUFJLFlBQVU7QUFFakIsTUFBRSxFQUFJLENBQUEsT0FBTSxBQUFDLEVBQUM7QUFHakIsRUFBRSxJQUFJLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxRQUFPLENBQUMsQUFBQyxDQUFDLFVBQVMsQ0FBQyxDQUFDLENBQUE7QUFHckMsRUFBRSxJQUFJLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxlQUFjLENBQUMsQUFBQyxDQUFDLFNBQVEsRUFBSSx5QkFBdUIsQ0FBQyxDQUFDLENBQUE7QUFHdEUsRUFBRSxJQUFJLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxjQUFhLENBQUMsQUFBQyxDQUFDLFNBQVEsRUFBSSxhQUFXLENBQUcsRUFBQyxPQUFNLENBQUcsTUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRzNFLEVBQUUsSUFBSSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsYUFBWSxDQUFDLFdBQVcsQUFBQyxFQUFDLENBQUMsQ0FBQTtBQUMzQyxFQUFFLElBQUksQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLGFBQVksQ0FBQyxLQUFLLEFBQUMsRUFBQyxDQUFDLENBQUE7QUFDckMsRUFBRSxJQUFJLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxhQUFZLENBQUMsS0FBSyxBQUFDLEVBQUMsQ0FBQyxDQUFBO0FBRXJDLEVBQUUsSUFBSSxBQUFDLENBQUMsUUFBTyxHQUFHLFNBQUMsR0FBRSxDQUFHLENBQUEsR0FBRSxDQUFNO0FBQy9CLElBQUUsS0FBSyxBQUFDLENBQUMsR0FBRSxDQUFDLENBQUE7QUFDYixFQUFDLENBQUE7QUFDRCxFQUFFLElBQUksQUFBQyxDQUFDLEdBQUUsR0FBRyxTQUFDLEdBQUUsQ0FBRyxDQUFBLEdBQUUsQ0FBTTtBQUMxQixJQUFFLEtBQUssQUFBQyxDQUFDLGFBQVksQ0FBQyxDQUFBO0FBQ3ZCLEVBQUMsQ0FBQTtBQUdELEVBQUUsT0FBTyxBQUFDLENBQUMsSUFBRyxDQUFHLEtBQUcsR0FBRyxTQUFBLEFBQUMsQ0FBSztBQUM1QixRQUFNLElBQUksQUFBQyxDQUFDLDhCQUE2QixDQUFHLEtBQUcsQ0FBRyxLQUFHLENBQUMsQ0FBQTtBQUN2RCxFQUFDLENBQUE7QUFBQSIsImZpbGUiOiJleHByZXNzX2hlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuXHQsIGFyZ3YgPSByZXF1aXJlKCd5YXJncycpLmFyZ3Zcblx0LCBwb3J0ID0gYXJndi5wb3J0IHx8IDgwMDBcblx0LCBob3N0ID0gJzEyNy4wLjAuMSdcblx0Ly8gQ3JlYXRlIGFuIGV4cHJlc3Mgc2VydmVyXG5cdCwgYXBwID0gZXhwcmVzcygpXG5cbi8vIEh0dHAgcmVxdWVzdCBsb2dnaW5nXG5hcHAudXNlKHJlcXVpcmUoJ21vcmdhbicpKCdjb21iaW5lZCcpKVxuXG4vLyBmYXZpY29uLmljbyBzdXBwb3J0XG5hcHAudXNlKHJlcXVpcmUoJ3NlcnZlLWZhdmljb24nKShfX2Rpcm5hbWUgKyAnLy4uL3N0YXRpYy9mYXZpY29uLmljbycpKVxuXG4vLyBTdGF0aWMgZmlsZSBzdXBwb3J0XG5hcHAudXNlKHJlcXVpcmUoJ3NlcnZlLXN0YXRpYycpKF9fZGlybmFtZSArICcvLi4vc3RhdGljJywgeydpbmRleCc6IGZhbHNlfSkpXG5cbi8vIEFkZCByZXEuYm9keVxuYXBwLnVzZShyZXF1aXJlKCdib2R5LXBhcnNlcicpLnVybGVuY29kZWQoKSlcbmFwcC51c2UocmVxdWlyZSgnYm9keS1wYXJzZXInKS5qc29uKCkpXG5hcHAudXNlKHJlcXVpcmUoJ2JvZHktcGFyc2VyJykudGV4dCgpKVxuXG5hcHAuYWxsKCcvZWNoby8nLCAocmVxLCByZXMpID0+IHtcblx0cmVxLnBpcGUocmVzKVxufSlcbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcblx0cmVzLnNlbmQoJ0hlbGxvIHdvcmxkJylcbn0pXG5cbi8vIExpc3RlbiBvbiBob3N0IGFuZCBwb3J0XG5hcHAubGlzdGVuKHBvcnQsIGhvc3QsICgpID0+IHtcblx0Y29uc29sZS5sb2coJ1NlcnZlciBhdCAlcyBsaXN0ZW5pbmcgb24gJXMnLCBob3N0LCBwb3J0KVxufSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=