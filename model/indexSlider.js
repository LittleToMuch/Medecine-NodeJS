const mongoose = require('mongoose');

const model = mongoose.model('index_slider', new mongoose.Schema({
    pic:String
}));

module.exports = model