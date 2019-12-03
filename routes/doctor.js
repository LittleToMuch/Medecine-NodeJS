var express = require('express');
var router = express.Router();
const doctorModel = require('../model/doctorModel');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/doctor')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})
const upload = multer({ storage: storage })

router.post('/upload', upload.single('avatar'), function (req, res, next) {
    console.log(req.file.path.split('\\').slice(1).join("\\"));
    console.log(req.body);
    let path = req.file.path.split('\\').slice(1).join("\\")
    res.send('http://localhost:8000/' + path)
})

router.post('/create', function(req, res, next) {
    let {name, department, tags, introduction, level, price, pic} = req.body
    console.log(name, department, tags, introduction, level, price, pic);
    
    doctorModel.create({name, department, tags, introduction, level, price, pic}).then(result => {
        res.send(result)
    })
})

router.post('/only', function (req, res, next) {
    doctorModel.find({ id: req.body.id }).then(result => {
        res.send(result)
    })
})

router.delete('/delete', function (req, res, next) {
    doctorModel.remove({ id: req.body.id }).then(result => {
        res.send(result)
    })
})

router.put('/update', function (req, res, next) {
    let { name, department, tags, introduction, level, price, pic } = req.body
    console.log(name, department, tags, introduction, level, price, pic);
    doctorModel.updateMany({ id: req.body.id }, { $set: { name, department, tags, introduction, level, price, pic } }).then(result => {
        console.log(result);
        if (result.nModified === 1) {
            return doctorModel.find({ id: req.body.id })
        } else {
            res.send({ update: 0 })
        }
    }).then(result => {
        res.send({ update: 1, result })
    })
})

router.get('/list', function (req, res, next) {
    let { limit } = req.query;
    limit = parseInt(limit)
    if (req.query.id) {
        doctorModel.find({
            id: req.query.id
        }).then(result => {
            res.send({ data: result })
        })
    } else if (limit) {
        doctorModel.find({}).limit(limit).then(result => {
            res.send({ data: result })
        })
    } else {
        doctorModel.find({}).then(result => {
            res.send({ data: result })
        })
    }
})

router.get('/list/classify', function (req, res, next) {
    console.log(req.query)
    let { name } = req.query;
    doctorModel.find({
        tags: new RegExp(name, 'g')
    }).then(result => {
        res.send({ list: result })
    })
})


module.exports = router;