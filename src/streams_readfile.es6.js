let http = require('http')
let fs = require('fs')

let server = http.createServer((req, res) => {
    fs.readFile(__filename, (err, data) => {
        res.end(data)
    })
})
server.listen(8000)
