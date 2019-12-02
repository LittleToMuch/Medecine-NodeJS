var express = require('express');
var router = express.Router();
const indexSlider = require('../model/indexSlider');
const indexSwiper = require('../model/indexSwiper');
/* GET home page. */
router.get('/slider', function(req, res, next) {
  indexSlider.find({}).then(result => {
    res.send({data:result})
  })
});
router.get('/swiper', function(req, res, next) {
  indexSwiper.find({}).then(result => {
    res.send({data:result})
  })
});

module.exports = router;
