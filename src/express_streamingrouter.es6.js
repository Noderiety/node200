let express = require('express')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = '127.0.0.1'
	// Create an express server
	, app = express()
	, streamingRouter = express.Router()

// Http request logging
app.use(require('morgan')('combined'))

// favicon.ico support
app.use(require('serve-favicon')(__dirname + '/../static/favicon.ico'))

// Static file support
app.use(require('serve-static')(__dirname + '/../static', {'index': false}))

streamingRouter.all('/echo/', (req, res) => {
	console.log('echo')
	req.pipe(res)
})

app.use(streamingRouter)

// Add req.body
app.use(require('body-parser').urlencoded())
app.use(require('body-parser').json())
app.use(require('body-parser').text())

app.get('/', (req, res) => {
	res.send('Hello world')
})

// Listen on host and port
app.listen(port, host, () => {
	console.log('Server at %s listening on %s', host, port)
})