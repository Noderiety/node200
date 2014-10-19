let http = require('http')
let fs = require('fs')

let server = http.createServer((req, res) => {
    fs.createReadStream(__filename).pipe(res)
})
server.listen(8000)
