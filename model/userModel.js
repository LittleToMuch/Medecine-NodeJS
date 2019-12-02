const mongoose = require('mongoose');

const model = mongoose.model('user', new mongoose.Schema({
    username: String,
    password: String,
    tel: Number,
    sex: String,
    pic: String
}));

module.exports = model


