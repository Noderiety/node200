var http = require('http')
	, trycatch = require('trycatch').configure({'long-stack-traces':true})

http.createServer(function(req, res) {
	console.log('you');
	trycatch(function() {
		setTimeout(function() {
			throw new Error('Baloney!');
		}, 1000);
	}, function(err) {
		res.writeHead(500);
		res.end(err.stack);
	});
}).listen(8000);
