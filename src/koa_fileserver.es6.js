let fs = require('fs')
	, path = require('path')
	, koa = require('koa')
	, app = koa()

// Error handler middleware
app.use(function *(next) {
	try {
		yield next
	} catch (e) {
	  this.body = 'Internal Server Error: \n' + e.stack
	}
})

app.use(function*(next) {
  var filePath = __dirname + this.path
  var fstat = yield fs.stat(filePath)

  if (fstat.isFile()) {
    this.type = path.extname(path)
    this.body = fs.createReadStream(path)
  }
})

app.get('/', function *(next) {
  yield process.nextTick
  this.body = "Hello world.";
});

app.listen(8080, '127.0.0.1', () => console.log('Listing at http://127.0.0.1:8080'))

