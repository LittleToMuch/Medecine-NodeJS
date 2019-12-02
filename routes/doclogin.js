var express = require('express');
var router = express.Router();
const userModel = require("../model/docuserModel");

const jwt = require('jwt-simple');
router.get('/',function(req,res,next){
    res.render('loginbsr',{title:'登录页面,前后端分离'})
})
router.post('/login', function (req, res, next) {
    let {tel} = req.body
    let {password} = req.body
    
    userModel.find({tel:parseInt(tel),password:password}).then(result => {
        if (result.length === 0) {
            res.send({login: 0})
        }else {
            res.send({login: 1,result})
        }
    })
})
router.post('/validate',function(req,res,next){ 
    // console.log(123123);
    userModel.find({
        tel:req.body.tel,
        password:req.body.password
    }).then(result =>{
         if(result.length ===1){
            let payload = {
                id:result[0].docid,
                username:result[0].username,
                exp:Date.now() +1000 *3600
            };
            let secret = 'cyf';
            let token = jwt.encode(payload,secret);
            res.send({login:1,token})
        }else{
            res.send({login:0})
        }
    })
})
module.exports = router;

   