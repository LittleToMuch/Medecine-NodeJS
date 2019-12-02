var express = require('express');
var router = express.Router();
const commentModel = require('../model/commentModel');
const shopModel = require('../model/shopModel')

router.get('/shop', function (req, res, next) {
    console.log(req.query);
    commentModel.find({shopId:req.query.shopId}).then(result => {
        res.send(result)
    })
})

router.get('/user', function (req, res, next) {
    console.log(req.query);
    commentModel.find({userId:req.query.userId}).then(result => {
        res.send(result)
    })
})

router.get('/list', function (req, res, next) {
    commentModel.find().then(result=>{
        console.log(result);
        let arrId = result.map(v=>v.shopId)
        return Promise.all([result, shopModel.find({id:{$in:arrId}})])
    }).then(result1 => {
        res.send(result1)
    })
})

router.post('/insert',function(req, res, next) {
    
    commentModel.create({
        content:req.body.content,
        userId:req.body.userId,
        shopId:req.body.shopId,
        username:req.body.username
    }).then(result => {
        res.send({insert:1})
    })

})

router.delete('/deleteSingle', function(req, res, next) {
    commentModel.remove({_id:req.body.id}).then(result => {
        console.log(result);
        res.send(result)
    })
})


module.exports = router;