let mongoose = require('mongoose')
	, q = require('q')

module.exports = {
	start: (config) => {
		// connect to Mongo when the app initializes
		return q.ninvoke(mongoose, 'connect', config.url)
	}
}