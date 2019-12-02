var express = require("express");
var router = express.Router();
const patientModel = require("../model/patientModel")
/* GET home page. */
router.get("/list", function(req, res, next) {
  console.log(req.query);
  patientModel.find({doctorId:req.query.id}).then(result => {
      res.send(result)
  })
});

router.get("/question",function(req,res,next){
  console.log(req.query);
  patientModel.find({_id:req.query.id}).then(result =>{
    res.send(result)
  })
})

module.exports = router;
