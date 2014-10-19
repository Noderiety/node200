let Writable = require('stream').Writable
let writableStream = new Writable

// Implement the _write function to consume data
writableStream._write = (chunk, enc, next) => {
  process.stdout.write(String(chunk))
  next()
}

process.stdin.pipe(writableStream)
