var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through');

tr.selectAll('.loud', function(stream) {
	var s = stream.createStream();
	s.pipe(through(function(data) {
		// console.log('here: ', String(data));
		this.queue(String(data).toUpperCase());
	})).pipe(s);
})

process.stdin.pipe(tr).pipe(process.stdout);
