let http = require('http')
let fs = require('fs')

let server = http.createServer((req, res) => {
	let buffer
	req.on('data', data => {
		buffer += data
	})
	req.on('end', () => {
	  fs.writeFile(__dirname + '/data.txt', buffer, (err, data) => {
      res.end()
	  })
	})
})
server.listen(8000)
