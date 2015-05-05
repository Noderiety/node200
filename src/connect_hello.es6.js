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
	app.get('/', (req, res, next) => {
		res.end('woops')
	})
}))

app.use((req, res, next) => {
	if (req.url = '/') {
		console.log('doing nothing')
		res.end('hello world\n')
	}
	next()
})

// Listen on host and port
app.listen(port, host, () => {
	console.log('Server at %s listening on %s', host, port)
})