var express = require('express');
var router = express.Router();
const userModel = require('../model/userModel');
const jwt = require('jwt-simple');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('loginbsr', {title: '登陆页面,前后端分离'});
});

router.post('/validate', function (req, res, next) {
    // hash.update(req.body.password)
    userModel.find({
        tel: req.body.tel,
        password: req.body.password
    }).then(result => {
        console.log(result);
        if (result.length === 1) {
            let payload = {
                id: result[0]._id,
                username: result[0].username,
                exp: Date.now() + 1000 * 3600
            };
            let secret = 'rose';
            let token = jwt.encode(payload, secret);
            res.send({login: 1, token})
            return;
        }else{
            res.send({login: 0})
        }
    })
});

module.exports = router;
