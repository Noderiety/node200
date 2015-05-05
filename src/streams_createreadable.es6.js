let Readable = require('stream').Readable

let readableStream = new Readable
readableStream.push('hello ')
let i = 0
setInterval(() => 
  readableStream.push(`${++i}\n`)
, 1000)
// Send null to end stream
// readableStream.push(null)

readableStream.pipe(process.stdout)
