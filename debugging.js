var fs = require('fs')
	, q = require('q')
	, path = require('path');

q.longStackSupport = true;

function copyFile(filename) {
	return q.nfcall(fs.readFile, filename)
		.then(function(data) {
			var basename = path.basename(filename, path.extname(filename))
				, copyName = filename.replace(basename, basename + '_copy');

			return q.nfcall(fs.writeFile, copyName, data);
		});
}

copyFile(__filename+'asdf')
.then(function(data) {
	console.log('success');
}, function(err) {
	err.stack = "Something went wrong:\n"+err.stack;
	console.log(err.stack);
})
.done();


setInterval(function(){},100000)