var express = require('express');
var router = express.Router();
const userModel = require('../model/userModel');
/* GET users listing. */
router.post('/', function(req, res, next) {
  userModel.find({
    _id:req.body.id
  }).then(result => {
    console.log(result);
    res.send({username:result[0].username,pic:result[0].pic,id:result[0]._id})
  })
});

router.put('/update', function (req, res, next) {
    userModel.updateOne({_id:req.body.id},{$set:{password:req.body.newpsw}}).then(result => {
      res.send(result)
    })
})

router.put('/freeze', function (req, res, next) {
  if(!req.body.freeze) {
    userModel.updateOne({_id: req.body.id},{$set: {freeze: 1}}).then(result => {
      console.log(result);
      res.send(result)
    })
  }else {
    userModel.updateOne({_id: req.body.id},{$set: {freeze: 0}}).then(result => {
      console.log(result);
      res.send(result)
    })
  }
  
})

router.get('/list', function(req, res, next) {
  console.log('sasdasda');
  
  userModel.find().then(result => {
    console.log(result);
    res.send(result)
  })
})

router.post('/edit', function(req, res, next) {
  console.log(req.body);
  userModel.update({
    _id:req.body.id,
    password:req.body.oldpsw
  },{$set:{
    password:req.body.newpsw
  }}).then(result => {
    if(result.nModified === 1){
      res.send({edit:1})
    }else{
      res.send({edit:0})
    }
  })
})

module.exports = router;
