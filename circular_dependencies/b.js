console.log('starting b')
var a = require('./a')

module.exports = function(a) {
	console.log('b\'s a', a)
	return {
		'isB': true
	}
}
