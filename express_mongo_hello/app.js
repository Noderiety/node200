// Creates and configures the server
let express = require('express')
	, bodyParser = require('body-parser')
	, methodOverride = require('method-override')
	, morgan = require('morgan')
	, routes = require('./routes/')
	, trycatchMiddleware = require('./middlewares/trycatch')
	, basicAuth = require('basic-auth-connect')
	, authMiddleware = require('./middlewares/auth-mongo')

module.exports = function main() {
	let app = express()

	// Error handling
	app.use(trycatchMiddleware())
	// Logging
	app.use(morgan('combined'))
	// Add req.body
  app.use(bodyParser.urlencoded())
  // Allow query param method= (e.g., POST)
  app.use(methodOverride())

	app.auth = basicAuth(authMiddleware())

	// set up the RESTful API, handler methods are defined in api.js
	routes(app)

	return app
}