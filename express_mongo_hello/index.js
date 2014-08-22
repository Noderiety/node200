// The main application script, ties everything together.

var argv = require('yargs').argv
	, mongoose = require('mongoose')
	, app = require('./app')
	, port = argv.port || 8000

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/norum')

app().listen(port)
console.log("Express server listening on port %d", port)
