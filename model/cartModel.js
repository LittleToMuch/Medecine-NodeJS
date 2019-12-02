const mongoose = require('mongoose');

const model = mongoose.model('cart', new mongoose.Schema({
    id:Number,
    num:Number,
    userId:String,
    shopId:Number
}));

module.exports = model