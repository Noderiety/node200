let http = require('http')
let fs = require('fs')

let server = http.createServer((req, res) => {
    req.pipe(fs.createWriteStream(__dirname + '/data.txt'))
})
server.listen(8000)
