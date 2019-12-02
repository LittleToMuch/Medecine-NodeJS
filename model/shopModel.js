const mongoose = require('mongoose');

const model = mongoose.model('shop', new mongoose.Schema({
    id:Number,
    prop:String,
    shop_name:String,
    producingArea:String,
    shape:String,
    store:String,
    eName:String,
    note:String,
    weight:String,
    price:String,
    type:String
}));

module.exports = model