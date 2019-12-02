var express = require('express');
var router = express.Router();
const cartModel = require('../model/cartModel');
const shopModel = require('../model/shopModel');

router.post('/list', function (req, res, next) {
    // console.log(req.body);
    cartModel.find({ userId: req.body.userId }).then(result => {
        // console.log(result);
        let arrId = result.map(v => v.shopId)
        return Promise.all([cartModel.find({ userId: req.body.userId }), shopModel.find({ id: { $in: arrId } })])
    }).then(result => {
        res.send(result)
    })
})

router.post('/insert', function (req, res, next) {
    console.log(req.body);
    cartModel.find({ shopId: req.body.shopId, userId: req.body.userId }).then(result => {
        console.log(result);
        if (result.length === 0) {
            return cartModel.create({
                userId: req.body.userId,
                shopId: req.body.shopId,
                num: 1
            })
        } else {
            return cartModel.update({
                userId: req.body.userId,
                shopId: req.body.shopId,
            },{$set:{num: result[0].num + 1}})
        }
    }).then(result => {
        res.send({ insert: 1 })
    })


})

router.delete('/delete', function (req, res, next) {
    // console.log(req.body);
    cartModel.remove({ shopId: req.body.id }).then(result => {
        console.log(result);
        res.send({ok:1})
    })
})

router.post('/update', function (req, res, next) {
    // console.log(req.body);
    cartModel.update({
        userId: req.body.userId,
        shopId: req.body.shopid
    }, { $set: { num: req.body.num } }).then(result => {
        res.send(result)
    })
})


module.exports = router;