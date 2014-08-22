var express = require('express')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = 'localhost'
	// Create an express server
	, app = express()

// Add the route
app.get('/home', function(req, res) {
	res.end('hello world')
})

// Listen on host and port
app.listen(port, host)
console.log('Server at %s listening on %s', host, port)