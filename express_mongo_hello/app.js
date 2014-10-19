// Creates and configures the server
let express = require('express')
	, bodyParser = require('body-parser')
	, methodOverride = require('method-override')
	, morgan = require('morgan')
	, routes = require('./routes/')
	, trycatchMiddleware = require('./middlewares/trycatch')

module.exports = function main() {
	let app = express()

	app.use(trycatchMiddleware)
	app.use(morgan('combined'))
  app.use(bodyParser.urlencoded())
  app.use(methodOverride())

	// set up the RESTful API, handler methods are defined in api.js
	routes(app)

	return app
}