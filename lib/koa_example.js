// See Koa Wiki for supported middleware: https://github.com/koajs/koa/wiki
var koa = require('koa')
	, app = koa()

// Error handler middleware
app.use(function *(next) {
	try {
		yield next
	} catch (e) {
	  this.body = 'Internal Server Error: \n' + e.stack
	}
})

// Http request logging
app.use(require('koa-logger'))
// favicon.ico support
app.use(require('koa-favicon')(__dirname + '/static/favicon.ico'))
// Static file support
app.use(require('koa-static')('./static'))
// Cookie-based session support
app.use(require('koa-session')(keys: ['secret1', 'secret2'])) // adds req.cookies
// Add this.req.body
app.use(require('koa-body-parser'))

app.use(require('koa-router')(app))
app.get('/home', function*(next) {
  var user = yield User.findOne(this.params.id);
  this.body = user;
})

app.listen(8080, '127.0.0.1')

