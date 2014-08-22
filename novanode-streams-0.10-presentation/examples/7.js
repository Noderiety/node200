var MatchStream = require('match-stream');

//Stream chunks until a match is found, then end the stream
//Ex. Pipe in "Hello World", pass along "Hello "

var ms = new MatchStream({ pattern: 'World'}, function (data, matched) {
  if (!matched) {
    return this.push(data);
  }
  this.push(data);
  return this.push(null); //signal end of data
});
