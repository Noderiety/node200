var express = require('express')
	, app = express()
	, trycatch = require('trycatch').configure({'long-stack-traces':true})

app.use(trycatchMiddleware);
app.get('/', function(req, res) {
	process.nextTick(function() {
		throw new Error('fail');
	});
});

app.listen(8000);

function requestErrorHandler(req, res, err) {
	res.writeHead(500);
	res.end(err.stack);
}

function trycatchMiddleware(req, res, next) {
	trycatch(function() {
		next();
	}, requestErrorHandler.bind(null, req, res));
}