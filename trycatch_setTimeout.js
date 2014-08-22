var trycatch = require('trycatch').configure({'long-stack-traces':true})

trycatch(function() {
	function f() {
		throw new Error('foo');
	}
	
	setTimeout(f, Math.random()*1000);
	setTimeout(f, Math.random()*1000);
}, function(err) {
	console.log("This is an asynchronous scoped error handler!\n", err.stack);
});
