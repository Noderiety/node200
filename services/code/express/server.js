var http = require('http');
var express = require('express');
var users = require('./users.json');

var app = express();
var auth = express.basicAuth(validate);

app.configure(function() {
  app.use(myMiddleware);
  app.use(express.bodyParser());
  app.use(app.router);
});
app.get('/version', version);
app.post('/user', register);
app.get('/user/:id?', auth, user);

http.createServer(app).listen(3000);


function validate (username, password, callback) {
  var result = (username === 'steve' && password === '12345');
  callback(null, result);
}

function myMiddleware (req, res, next) {
  res.setHeader('X-API-Version', '1.0.0');
  return next();
}

function version (req, res) {
  var result = { version: '1.0.0' };
  res.json(result);
}

function register (req, res) {
  // use req.body to create new user
}

function user (req, res) {
  if (!req.params.id) return res.json(users);
  var item = users[req.params.id];
  if (!item) return res.send(404, 'not found');
  res.json(item);
}
