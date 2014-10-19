let http = require('http')
let fs = require('fs')
let oppressor = require('oppressor')

let server = http.createServer(function (req, res) {
    fs.createReadStream(__filename)
    	.pipe(oppressor(req))
    	.pipe(res)
})
server.listen(8000)
