const mongoose = require('mongoose');

const model = mongoose.model('shop_swiper', new mongoose.Schema({
    id:String,
    pic:String
}));

module.exports = model