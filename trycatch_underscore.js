var trycatch = require('trycatch').configure({'long-stack-traces':true}),
  _ = require('lodash')

trycatch(function() {
  _.map(['Error 1', 'Error 2'], function foo(v) {
    setTimeout(function() {
      throw new Error(v)
    }, 10)
  })
}, function(err) {
  console.log("Async error caught!\n", err.stack);
});