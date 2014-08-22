// The main application script, ties everything together.

var argv = require('yargs').argv
	, co = require('co')
	, App = require('./app')
	, config = require('./config')
	, mongoDriver = require('./drivers/mongo')
	, port = argv.port || 8000

co(function *() {
	var app = App()

	yield [
		mongoDriver.start.bind(null, config.mongo)
 	, app.listen.bind(app, port)
 	]
	
})(function(err) {
	if (err) throw err
	console.log("Express server listening on port %d", port)
})
