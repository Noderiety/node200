let request = require('request')
	, util = require('util')
	, http = require('http')
	, url = require('url')
	, fs = require('fs')
	, Writable = require('stream').Writable

http.createServer(function(req, res) {
	let uri = 'http://127.0.0.1:8000' + url.parse(req.url).path
	console.log(uri)

	let serverRequest = request({
		headers: req.headers,
		url: uri
	})

	let writeStream = fs.createWriteStream('./test.png')
	req.pipe(serverRequest).pipe(
		new SplitterStream(process.stdout, writeStream, res))
}).listen(9000)

function SplitterStream() {
	let streams = Array.prototype.slice.call(arguments)
	Writable.call(this)
	this._write = function(chunk, encoding, next) {
		streams.forEach(stream => stream.write(chunk))
		next()
	}
}
util.inherits(SplitterStream, Writable)