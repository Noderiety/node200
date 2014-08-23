'use strict';
// var agent = require('webkit-devtools-agent');


var Readable = require('stream').Readable;
var Writable = require('stream').Writable;
var Transform = require('stream').Transform;
var words = 'abcdefghijklmnopqrstuvwxyz'.split('');

function CapsLockStream() {
	this.__proto__ = Transform.call(this);
	this._transform = function(data, encoding, done) {
		for (var i =0; i < data.length; i++) {
			if (data[i] >= 97 && data[i] <= 122) {
				data[i] &= ~32;
			}
		}
		this.push(data);
		throw new Error('fail')
		done();
	}
}

function RandomLetterStream(n) {
	var index = 0;
	this.__proto__ = Readable.call(this);
	this._read = function(size) {
		if (n-- === 0) return this.push(null);
		this.push(words[index++]);
	}
}

function ConsoleLogTransformStream() {
	this.__proto__ = Writable.call(this);
	this._transform = function(chunk, encoding, done) {
		console.log(String(chunk));
		this.push(chunk);
		done();
	}
}

function ConsoleLogStream() {
	this.__proto__ = Writable.call(this);
	this._write = function(chunk, encoding, done) {
		console.log(String(chunk));
		done();
	}
}

function SplitterStream() {
	this.__proto__ = Writable.call(this);
	this._write = function(chunk, encoding, done) {
		process.stdout.write(chunk);
		process.stderr.write(chunk);
		done();
	}
}

var trycatch = require('trycatch')
require('http').createServer(function(req, res) {
	trycatch(function() {
		(new RandomLetterStream).length
		req.pipe(new CapsLockStream).pipe(res);
	}, function(err) {
		res.end(err.stack)
	})
}).listen(8000);










