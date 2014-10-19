let Readable = require('stream').Readable

let readableStream = new Readable
readableStream.push('hello ')
readableStream.push('world\n')
// Send null to end stream
readableStream.push(null)

readableStream.pipe(process.stdout)
