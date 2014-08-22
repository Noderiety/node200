var mongoose = require('mongoose')

module.exports = {
	start: function (config, callback) {
		// connect to Mongo when the app initializes
		mongoose.connect(config.url, callback)
	}
}