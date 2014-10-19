// The main application script, ties everything together.
// Or use mongo ds047040.mongolab.com:47040/noderiety -u user -p password
// User's credentials: "testName":"nothing"
let argv = require('yargs').argv
	, co = require('co')
	, App = require('./app')
	, config = require('./config')
	, mongoDriver = require('./drivers/mongo')
	, port = argv.port || 8000

co(function *() {
	var app = App()

 	yield mongoDriver.start(config.mongo)
 	yield app.listen.bind(app, port)
	console.log("Express server listening on port %d", port)
})(function(err) {
	if (err) throw err
})
