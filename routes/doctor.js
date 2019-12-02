var express = require('express');
var router = express.Router();
const doctorModel = require('../model/doctorModel');

router.post('/only', function (req, res, next) {
    doctorModel.find({id:req.body.id}).then(result => {
        res.send(result)
    })
})

router.delete('/delete', function (req, res, next) {
    doctorModel.remove({id:req.body.id}).then(result => {
        res.send(result)
    })
})

router.put('/update', function (req, res, next) {
     let {name,department,tags,introduction,level,price} = req.body
     console.log(name,department,tags,introduction,level,price);
    doctorModel.updateMany({id:req.body.id},{$set:{name:name,department:department,tags:tags,introduction:introduction,level:level,price:price}}).then(result => {
        console.log(result);
        if(result.nModified === 1){
            return doctorModel.find({id:req.body.id})
        }else{
            res.send({update: 0})
        }
    }).then(result => {
        res.send({update:1,result})
    })
})

router.get('/list', function (req, res, next) {
    let {limit} = req.query;
    limit=parseInt(limit)
    if (req.query.id) {
        doctorModel.find({
            id:req.query.id
        }).then(result => {
            res.send({ data: result })
        })
    }else if(limit){
        doctorModel.find({}).limit(limit).then(result => {
            res.send({ data: result })
        })
    }else{
        doctorModel.find({}).then(result => {
            res.send({ data: result })
        })
    }
})

router.get('/list/classify',function(req, res, next) {
    console.log(req.query)
    let {name} = req.query;
    doctorModel.find({
        tags:new RegExp(name,'g')
    }).then(result => {
        res.send({list:result})
    })
})


module.exports = router;