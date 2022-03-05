const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
        userFrom:{
        type: Schema.Types.ObjectId.ObjectId,
        //user 의 정보 가져올 수 있다.
        ref: 'User'
        },
        movieId:{
            type: String,

        },
        movieTitle:{
            type: String
        },
        moviePost: {
            type: String
        },
        movieRunTime: {
            type: String
        }
    },
        {timestamps: true})

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = { Favorite}