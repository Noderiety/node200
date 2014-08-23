var express = require('express')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = 'localhost'
	// Create an express server
	, app = express()

// Add the route
app.post('/home', function(req, res) {
	req.pipe(res)
	// res.json(req.headers)
})

// Listen on host and port
app.listen(port, host)
console.log('Server at %s listening on %s', host, port)