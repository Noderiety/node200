var agent = require('webkit-devtools-agent');
var memoryleak = []
var fs = require('fs')
var q = require('q')

setInterval(function() {
	q.nfcall(fs.readFile, __filename)
		.then(function(data) {
			memoryleak.push(data)
		})
})
