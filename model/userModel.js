const mongoose = require('mongoose');

const model = mongoose.model('user', new mongoose.Schema({
    username: String,
    password: String,
    tel: Number,
    sex: String,
    pic: String,
    id: String,
    freeze: Number
}));

module.exports = model


