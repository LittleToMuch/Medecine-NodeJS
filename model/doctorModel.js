const mongoose = require('mongoose');

const model = mongoose.model('doctor', new mongoose.Schema({
    id:Number,
    name:String,
    department:String,
    tags:String,
    introduction:String,
    level:String,
    price:Number,
    pic:String,
}));

module.exports = model