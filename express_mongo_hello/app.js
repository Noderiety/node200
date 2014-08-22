// Creates and configures the server
var express = require('express')
	, bodyParser = require('body-parser')
	, methodOverride = require('method-override')
	, controllers = require('./controllers/')

module.exports = function main() {
	var app = express()

  app.use(bodyParser.text())
  app.use(methodOverride())

	// set up the RESTful API, handler methods are defined in api.js
	controllers.forEach(function(controller) {
		controller(app)
	})

	return app
}

