const mongoose = require('mongoose');

const model = mongoose.model('comment', new mongoose.Schema({
    content:String,
    userId:String,
    shopId:String,
    username:String,
    id:String
}));

module.exports = model