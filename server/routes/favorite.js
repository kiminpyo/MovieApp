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
        if(err) return res.status(400) 
            //클라이언트에 정보 보낸다
            res.status(200).json({success:true, favoriteNumber: info.length })
        
    })
    //그다음에 프론트에 다시 숫자 정보를 보내주기


})

module.exports = router;