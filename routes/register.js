var express = require('express');
var router = express.Router();
const userModel = require('../model/userModel');
// const crypto = require('crypto');
// const hash = crypto.createHash('sha1')

/* GET users listing. */
router.post('/', function (req, res, next) {
    // hash.update(req.body.password)
    userModel.create({
        username: req.body.username,
        password: req.body.password,
        tel: req.body.tel,
        sex: req.body.sex,
        pic: '/images/head.jpg'
    }).then(result => {
        if (result === 0) {
            res.send({register: 0})
        } else {
            res.send({register: 1})
        }
    })
});
router.get('/validate', function (req, res, next) {
    userModel.find({
        tel: req.query.tel
    }).then(result => {
        if (result.length === 0) {
            res.send({validata: 1})
        } else {
            res.send({validate: 0})
        }
    })
});


module.exports = router;
