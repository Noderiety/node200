let Readable = require('stream').Readable
let readableStream = Readable()

let c = 97
readableStream._read = () => {
  setTimeout(() => {
    if (c > 'z'.charCodeAt(0)) {
      readableStream.push(null)
    } else {
      readableStream.push(String.fromCharCode(c++))
    }
  }, 200)
}

// console.log(readableStream.read())

readableStream.pipe(process.stdout)
