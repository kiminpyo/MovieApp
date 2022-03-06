const express = require('express');
const router = express.Router();
const {Favorite} = require('../models/Favorite')
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

//index.js 에 써준다
router.post('/favoriteNumber', (req,res) =>{

    req.body.movieId

   
    
    //mongDBdptj favorite  숫자 가져오기
    Favorite.find({"movieId" : req.body.movieId})
    .exec((err, info) => {
        if(err) return res.status(400).send(err)
            //클라이언트에 정보 보낸다
            res.status(200).json({success:true, favoriteNumber: info.length })
        
    })
    //그다음에 프론트에 다시 숫자 정보를 보내주기


})

router.post('/favorited', (req,res) =>{

    req.body.movieId

   //내가 이 영화를 favorite 리스트에 넣었는지 정보를 db에서 가져오기
    
    //mongDBdptj favorite  숫자 가져오기
    Favorite.find({"movieId" : req.body.movieId, "userFrom": req.body.userFrom})
    .exec((err, info) => {
        if(err) return res.status(400).send(err)
           //그다음에 프론트에 다시 숫자 정보를 보내주기
            
            let result = false;
            if(info.length !== 0 ){
                result = true
            }
            res.status(200).json({success:true, favorited: result })
        
    })
  

})

 router.post('/removeFromFavorite', (req,res) =>{

   Favorite.findOneAndDelete({movieId: req.body.movieId, userFrom:req.body.userFrom})
   .exec((err,doc) => {
       if(err) return res.status(400).send(err)
       res.status(200).json({success: true, doc})
   })
  

})

router.post('/addToFavorite', (req,res) =>{

  

  const favorite = new Favorite(req.body)
  //req.body에 있는 모든 정보들  document에 넣는다.
  favorite.save((err, doc) => {
      if(err) return res.status(400).send(err)
      return res.status(200).json({success: true})

  });

})  

module.exports = router;