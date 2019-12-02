var express = require('express');
var router = express.Router();
const doctorswiperMode = require('../model/doctorswiperMode');

router.get('/swiper', function (req, res, next) {
    doctorswiperMode.find({}).then(result => {
        res.send({pic:result})
    })
})


module.exports = router;