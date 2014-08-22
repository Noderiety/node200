console.log('starting a')

module.exports = function() {
	return {
		setB: function (b) {
			console.log('a\'s b: ', b)
			this.b = b
		}
	}
}
