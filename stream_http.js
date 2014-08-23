var request = require('request')
	, http = require('http')
	, url = require('url')
	, fs = require('fs')
	, Writable = require('stream').Writable

http.createServer(function(req, res) {
	var uri = 'http://127.0.0.1:8000' + url.parse(req.url).path
	console.log(uri)
	var serverRequest = request({
		headers: req.headers,
		url: uri
	})

	var writeStream = fs.createWriteStream('./test.png')
	req.pipe(serverRequest).pipe(
		new SplitterStream(process.stdout, writeStream, res))
}).listen(9000)

function SplitterStream() {
	var streams = Array.prototype.slice.call(arguments)
	this.__proto__ = Writable.call(this);
	this._write = function(chunk, encoding, done) {
		streams.forEach(function(stream) {
			stream.write(chunk)
		})
		done();
	}
}