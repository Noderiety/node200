var koa = require('koa')
	, app = koa()

// Error handler middleware
app.use(function *(next) {
	try {
		yield next
	} catch (e) {
	  res.end('Internal Server Error: \n', e.stack)
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

app.use(require('connect-route')(require('./users'))
app.use(require('connect-route')(require('./index'))

app.listen(8080, '127.0.0.1')

