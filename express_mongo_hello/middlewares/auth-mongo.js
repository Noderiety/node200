let User = require('../models/user')
	, q = require('q')
	, bcrypt = require('bcrypt')

// const SECRET = '$2a$04$bkZO8eLosm0QAu4EWdeEs.'

module.exports = function() {
	return function(user, pass, callback) {
		q.ninvoke(User, 'findOne', {name: user})
			.then((user) => q.nfcall(bcrypt.compare, pass, user.password))
			.then((success) => callback(null, success), callback)
			.done()
	}
}