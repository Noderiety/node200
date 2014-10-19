let fs = require('fs')
let request = require('request')
let duplexStream = request('http://google.com')
fs.createReadStream(__filename).pipe(duplexStream).pipe(process.stdout)
