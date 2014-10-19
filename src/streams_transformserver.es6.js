let Readable = require('stream').Readable
let Writable = require('stream').Writable
let Transform = require('stream').Transform
let words = 'abcdefghijklmnopqrstuvwxyz'.split('')

function CapsLockStream() {
	this.__proto__ = Transform.call(this)
	this._transform = (data, encoding, done) => {
		for (let i =0; i < data.length; i++) {
			if (data[i] >= 97 && data[i] <= 122) {
				data[i] &= ~32
			}
		}
		this.push(data)
		throw new Error('fail')
		done()
	}
}

function RandomLetterStream(n) {
	let index = 0
	this.__proto__ = Readable.call(this)
	this._read = (size) => {
		if (n-- === 0) return this.push(null)
		this.push(words[index++])
	}
}

function ConsoleLogTransformStream() {
	this.__proto__ = Writable.call(this)
	this._transform = (chunk, encoding, done) => {
		console.log(String(chunk))
		this.push(chunk)
		done()
	}
}

function ConsoleLogStream() {
	this.__proto__ = Writable.call(this)
	this._write = (chunk, encoding, done) => {
		console.log(String(chunk))
		done()
	}
}

function SplitterStream() {
	this.__proto__ = Writable.call(this)
	this._write = (chunk, encoding, done) => {
		process.stdout.write(chunk)
		process.stderr.write(chunk)
		done()
	}
}

let trycatch = require('trycatch')
require('http').createServer((req, res) => {
	trycatch(() => {
		(new RandomLetterStream).length
		req.pipe(new CapsLockStream).pipe(res)
	}, err => res.end(err.stack))
}).listen(8000)










