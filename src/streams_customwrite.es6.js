let Writable = require('stream').Writable
let writableStream = new Writable

// Implement the _write function to consume data
writableStream._write = (chunk, enc, next) => {
  process.stdout.write(String(chunk))
  setTimeout(next, 300)
}

process.stdin.on('readable', () => {
  let chunk
  while(chunk=process.stdin.read(5)){
    writableStream.write(chunk)
  }
})
