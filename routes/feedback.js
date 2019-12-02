var express = require('express');
var router = express.Router();
const feedbackModel = require('../model/feedbackModel');

router.get('/list', function (req, res, next) {
    console.log(req.query);
    
    feedbackModel.find({
        _id:req.query.id
    }).then(result => {
        res.send(result)
    })
})


module.exports = router;