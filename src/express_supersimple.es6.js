let express = require('express')
let stack = require('stack')

// Create an express server
let app = express()

let middleware = stack.compose(
  middlewareOne,
  middlewareTwo,
  middlewareThree
)

app.all('/echo/', (req, res) => {
  req.pipe(res)
})
app.get('/', (req, res) => {
  res.send('Hello world')
})

// Listen on host and port
app.listen(8000, () => {
  console.log('Server listening at %s:%s', '127.0.0.1', 8000)
})