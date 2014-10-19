var connect = require('connect')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = 'localhost'
	// Create an connect server
	, app = connect.createServer()

// Add the route
app.use(connect.router(function(app) {
	app.get('/home', function(req, res, next) {
		res.end('hello world')
	})
})

// Listen on host and port
app.listen(port, host)
console.log('Server at %s listening on %s', host, port)