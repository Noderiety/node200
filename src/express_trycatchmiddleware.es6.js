let express = require('express')
	, app = express()
	, trycatch = require('trycatch').configure({'long-stack-traces':true})

app.use(trycatchMiddleware)
app.get('/', (req, res) => {
	process.nextTick(() => {
		throw new Error('fail')
	})
})

app.listen(8000)

function requestErrorHandler(req, res, err) {
	res.writeHead(500)
	res.end(err.stack)
}

function trycatchMiddleware(req, res, next) {
	trycatch(next, requestErrorHandler.bind(null, req, res))
}