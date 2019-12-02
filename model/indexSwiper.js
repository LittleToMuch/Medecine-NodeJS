const mongoose = require('mongoose');

const model = mongoose.model('index_swiper', new mongoose.Schema({
    name:String,
    icon:String
}));

module.exports = model