let Readable = require('stream').Readable
let readableStream = Readable()

let c = 97
readableStream._read = () => {
  readableStream.push(String.fromCharCode(c++))
  if (c > 'z'.charCodeAt(0)) readableStream.push(null)
}

readableStream.pipe(process.stdout)
