var express = require('express');
var router = express.Router();
const userModel = require("../model/docuserModel");


/* GET users listing. */
router.post("/", function(req, res, next) {
  // console.log(req.body.id);
  
  userModel.find({
      _id: req.body.id
    }).then(result => {
      console.log(result);
      res.send({
        username: result[0].username,
        pic: result[0].pic,
        id: result[0]._id
      });
    });
});


module.exports = router;
