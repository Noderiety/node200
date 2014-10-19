let connect = require('connect')
	, app = connect()

// Http request logging
app.use(require('morgan')('combined'))

// favicon.ico support
app.use(require('serve-favicon')(__dirname + '/../static/favicon.ico'))

// Static file support
app.use(require('serve-static')(__dirname + '/static', {'index': false}))

// Cookie-based session support
app.use(require('cookie-session')({keys: ['secret1', 'secret2']})) // adds req.cookies

// Add req.body
app.use(require('body-parser').urlencoded())
app.use(require('body-parser').json())
app.use(require('body-parser').text())

app.use(require('connect-route')(require('./routes/users')))
app.use(require('connect-route')(require('./routes/index')))

// Error handler middleware
app.use((err, req, res, next) => {
  res.end('Internal Server Error')
})

app.listen(8080, '127.0.0.1')

