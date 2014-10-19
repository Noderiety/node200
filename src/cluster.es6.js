let cluster = require('cluster')
  , numCPUs = require('os').cpus().length

if (!cluster.isMaster) {
  require(process.argv[2])
  return
}

cluster.on('exit', (worker, code, signal) => {
  console.log('worker ' + worker.process.pid + ' died')
})

// Fork workers.
for (let i = 0; i < numCPUs; i++) {
  cluster.fork()
}
