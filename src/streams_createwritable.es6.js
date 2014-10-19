let fs = require('fs')
let writableStream = fs.createWriteStream(__filename)

writableStream.write('hello ')

setImmediate(() => writableStream.end('world\n'))
