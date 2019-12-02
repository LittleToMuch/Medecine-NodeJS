var express = require('express');
var router = express.Router();
const shop = require('../model/shopModel');
const shop_swiper = require('../model/shopSwiperModel');
/* GET home page. */
router.get('/shoplist', function(req, res, next) {
    if(req.query.name){
        shop.find({type:new RegExp(req.query.name,'g')}).then(result => {
            res.send(result)
        })
    }else{
        shop.find({}).then(result => {
            res.send(result)
        })
    }
});
router.get('/shopDetail', function(req, res, next) {
  let { id } = req.query
  shop.find({id}).then(result => {
      res.send(result)
  })
});
router.get('/shopSwiper', function(req, res, next) {
    let { id } = req.query
    shop_swiper.find({id}).then(result => {
        res.send(result)
    })
})

router.get('/search', function(req, res, next) {
    console.log(req.query);
    shop.find({shop_name:new RegExp(req.query.name,'g','i')}).then(result => {
        res.send(result)
    })
})

router.get('/shopDetails', function(req, res, next) {
    console.log(req.query.name);
    shop.find({shop_name:req.query.name}).then(result => {
        res.send(result)
    })
    
})

module.exports = router;
