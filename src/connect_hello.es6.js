let connect = require('connect')
	, connectRouter = require('connect-route')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = 'localhost'
	// Create an connect server
	, app = connect()

// Add the route
app.use(connectRouter((app) => {
	app.get('/home', (req, res, next) => {
		res.end('hello world')
	})
}))

// Listen on host and port
app.listen(port, host, () => {
	console.log('Server at %s listening on %s', host, port)
})