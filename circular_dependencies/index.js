// Require
var A = require('./a')
	, B = require('./b')

console.log('Index\'s a,b ', a, b)

// Configure
var a = A()
var b = B(a)
a.setB(b)
