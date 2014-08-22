var cluster = require('cluster')
  , numCPUs = require('os').cpus().length

if (!cluster.isMaster) {
  require(process.argv[2])
  return
}

cluster.on('exit', function(worker, code, signal) {
  console.log('worker ' + worker.process.pid + ' died')
})

// Fork workers.
for (var i = 0; i < numCPUs; i++) {
  cluster.fork()
}
