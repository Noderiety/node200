let fs = require('fs')
	, Transform = require('stream').Transform

fs.createReadStream(__filename)
	.pipe(new CapsLockStream)
	.pipe(fs.createWriteStream(__filename+'_copy'))

function CapsLockStream() {
	this.__proto__ = Transform.call(this)
	this._transform = (data, encoding, done) => {
		for (let i =0; i < data.length; i++) {
			if (data[i] >= 97 && data[i] <= 122) {
				data[i] &= ~32
			}
		}
		this.push(data)
		done()
	}
}
