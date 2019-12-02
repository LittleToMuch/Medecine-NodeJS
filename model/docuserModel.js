const mongoose = require('mongoose');

const model = mongoose.model('doclogin',new mongoose.Schema({
    username:String,
    password:String,
    tel:Number,
    pic:String,
    docid:Number
}));

module.exports = model