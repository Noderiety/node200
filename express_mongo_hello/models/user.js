// The Post model

let mongoose = require('mongoose')
  , Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);