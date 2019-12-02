const mongoose = require("mongoose");

const model = mongoose.model(
  "question",
  new mongoose.Schema({
    doctorId: Number
  })
);

module.exports = model;
