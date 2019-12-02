var express = require('express');
var router = express.Router();
const questionModel = require('../model/questionModel');
const multer = require('multer');
const upload = multer({ dest: 'public/images/question' });

router.post('/info/upload', upload.array('qustionFile', 3), function (req, res, next) {
    console.log(req.files[0].filename);
    questionModel.create({
        path: `/images/question/${req.files[0].filename}`
    }).then(result => {
        res.send(result._id);
    })
})

router.post('/info', function (req, res, next) {
    console.log(req.body.params);
    if (!req.body.params.id) {
        questionModel.create({
            name: req.body.params.name,
            sex: req.body.params.sex,
            age: req.body.params.age,
            history: req.body.params.history,
            feel: req.body.params.feel,
            perspire: req.body.params.perspire,
            hurt: req.body.params.hurt,
            shit: req.body.params.shit,
            smoke: req.body.params.smoke,
            habit: req.body.params.habit,
            chest: req.body.params.chest,
            doctorId: req.body.params.doctorId,
            userId: req.body.params.userId
        }).then(result => {
            res.send({ update: 1 })
        })
    } else {
        questionModel.update({ _id: req.body.params.id }, {
            name: req.body.params.name,
            sex: req.body.params.sex,
            age: req.body.params.age,
            history: req.body.params.history,
            feel: req.body.params.feel,
            perspire: req.body.params.perspire,
            hurt: req.body.params.hurt,
            shit: req.body.params.shit,
            smoke: req.body.params.smoke,
            habit: req.body.params.habit,
            chest: req.body.params.chest,
            doctorId: req.body.params.doctorId,
            userId: req.body.params.userId
        }).then(result => {
            res.send({ update: 1 })
        })
    }


})

router.delete('/info/delete', function (req, res, next) {
    questionModel.remove({
        _id: req.body.id
    }).then(result => {
        res.send({ delete: 1 })
    })
})

router.get('/info/list', function (req, res, next) {
    console.log(req.query);
    if (req.query.id) {
        questionModel.find({
            userId: req.query.id
        }).then(result => {
            res.send(result)
        })
    }else{
        questionModel.find().then(result => {
            res.send(result)
        })
    }

})


module.exports = router;