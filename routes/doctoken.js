var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple')

/* GET users listing. */
router.get('/validate', function(req, res, next) {
    console.log(req.headers.authorization,111);
  const token = req.headers.authorization
//   console.log(typeof req.headers.authorization);
  if(!token){ 
      res.send({validate:0})
      return;
  }
  const obj = jwt.decode(token,'cyf');
  if(obj.exp > Date.now()){
      res.send({validate:1,id:obj.id})
  }else{
      res.send({validate:0})
  }
});

module.exports = router;
