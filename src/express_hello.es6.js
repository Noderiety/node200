let express = require('express')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = '127.0.0.1'
	// Create an express server
	, app = express()

// Add the route
app.post('/echo', (req, res) => req.pipe(res))
app.post('/', (req, res) => {
	res.send('Hello world')
})

// Listen on host and port
app.listen(port, host, () => {
	let host = app.address.address()
		, port = app.address.port()
	console.log('Server at %s listening on %s', host, port)
})