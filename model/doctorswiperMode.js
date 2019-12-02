const mongoose = require('mongoose');
const model = mongoose.model('dignose_swiper', new mongoose.Schema({
    pic:String
}));

module.exports = model