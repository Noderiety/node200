let Transform = require('stream').Transform
let transformStream = new Transform

// Implement the _transform function to consume data
transformStream._transform = (chunk, enc, next) => {
  setTimeout(() => {
    next(null, String(chunk))
  }, 300)
}


process.stdin.on('readable', () => {
  let chunk
  while(chunk=process.stdin.read(5)){
    transformStream.write(chunk)
  }
})

transformStream.pipe(process.stdout)