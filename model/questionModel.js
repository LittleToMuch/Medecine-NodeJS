const mongoose = require('mongoose');

const model = mongoose.model('questions', new mongoose.Schema({
    name:String,
    sex:String,
    age:String,
    history:String,
    feel:String,
    perspire:String,
    hurt:String,
    shit:String,
    smoke:Array,
    habit:String,
    chest:String,
    path:String,
    doctorId:Number,
    userId:String,
    id:String
}));

module.exports = model