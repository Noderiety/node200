"use strict";
require('traceur-source-maps').install(require('traceur'));
var cluster = require('cluster'),
    numCPUs = require('os').cpus().length;
if (!cluster.isMaster) {
  require(process.argv[2]);
  return;
}
cluster.on('exit', (function(worker, code, signal) {
  console.log('worker ' + worker.process.pid + ' died');
}));
{
  try {
    throw undefined;
  } catch ($i) {
    {
      $i = 0;
      for (; $i < numCPUs; $i++) {
        try {
          throw undefined;
        } catch (i) {
          {
            i = $i;
            try {
              cluster.fork();
            } finally {
              $i = i;
            }
          }
        }
      }
    }
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdXN0ZXIuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsT0FBTSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDO0FBQ3RGLFVBQU0sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLElBQUcsQ0FBQyxLQUFLLEFBQUMsRUFBQyxPQUFPO0FBRXhDLEdBQUksQ0FBQyxPQUFNLFNBQVMsQ0FBRztBQUNyQixRQUFNLEFBQUMsQ0FBQyxPQUFNLEtBQUssQ0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFBO0FBQ3ZCLFFBQUs7QUFDUDtBQUFBLEFBRUEsTUFBTSxHQUFHLEFBQUMsQ0FBQyxNQUFLLEdBQUcsU0FBQyxNQUFLLENBQUcsQ0FBQSxJQUFHLENBQUcsQ0FBQSxNQUFLLENBQU07QUFDM0MsUUFBTSxJQUFJLEFBQUMsQ0FBQyxTQUFRLEVBQUksQ0FBQSxNQUFLLFFBQVEsSUFBSSxDQUFBLENBQUksUUFBTSxDQUFDLENBQUE7QUFDdEQsRUFBQyxDQUFBOzs7Ozs7U0FHWSxFQUFBO1dBQUcsS0FBSSxRQUFNLENBQUcsS0FBRTs7Ozs7O2NBQUc7QUFDaEMsb0JBQU0sS0FBSyxBQUFDLEVBQUMsQ0FBQTtZQUNmOzs7Ozs7Ozs7QUFDQSIsImZpbGUiOiJjbHVzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgY2x1c3RlciA9IHJlcXVpcmUoJ2NsdXN0ZXInKVxuICAsIG51bUNQVXMgPSByZXF1aXJlKCdvcycpLmNwdXMoKS5sZW5ndGhcblxuaWYgKCFjbHVzdGVyLmlzTWFzdGVyKSB7XG4gIHJlcXVpcmUocHJvY2Vzcy5hcmd2WzJdKVxuICByZXR1cm5cbn1cblxuY2x1c3Rlci5vbignZXhpdCcsICh3b3JrZXIsIGNvZGUsIHNpZ25hbCkgPT4ge1xuICBjb25zb2xlLmxvZygnd29ya2VyICcgKyB3b3JrZXIucHJvY2Vzcy5waWQgKyAnIGRpZWQnKVxufSlcblxuLy8gRm9yayB3b3JrZXJzLlxuZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DUFVzOyBpKyspIHtcbiAgY2x1c3Rlci5mb3JrKClcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==