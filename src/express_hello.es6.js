let express = require('express')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = 'localhost'
	// Create an express server
	, app = express()

// Add the route
app.post('/home', (req, res) => req.pipe(res))

// Listen on host and port
app.listen(port, host, () => {
	console.log('Server at %s listening on %s', host, port)
})