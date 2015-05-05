
console.log(process.stdin.read())
process.stdin.on('readable', () => {
  let buffer = process.stdin.read()
  console.log(buffer)
})
