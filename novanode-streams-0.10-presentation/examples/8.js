...

inherits(Match, Transform);
function Match(opts, matchFn) {
	...
  Transform.call(this);
}

Match.prototype._transform = function (chunk, encoding, callback) {
  var pattern = this._opts.pattern;
  this._bufs.push(chunk);

  var index = this._bufs.indexOf(pattern);
  if (index >= 0) {
    //call matchFn for every match within a given chunk
    processMatches.call(this, index, pattern, callback);
  } else {
    this._matchFn(this._bufs.splice(0, this._bufs.length - chunk.length));
    callback();
  }
};

...
