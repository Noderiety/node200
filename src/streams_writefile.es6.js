let http = require('http')
let fs = require('fs')

let server = http.createServer((req, res) => {
	req.on('end', () => {
		let buffer, chunk
		while(chunk = req.read()) {
			buffer.concat(chunk)
		}
	  fs.writeFile(__dirname + '/data.txt', buffer, (err, data) => {
      res.end()
	  })
	})
})
server.listen(8000)
