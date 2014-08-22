var trycatch = require('trycatch').configure({'long-stack-traces': true})

function requestErrorHandler(req, res, err) {
	res.writeHead(500);
	res.end(err.stack);
}

function trycatchMiddleware(req, res, next) {
	trycatch(function() {
		next();
	}, requestErrorHandler.bind(null, req, res));
}

module.exports = trycatchMiddleware