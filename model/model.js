const mongoose = require('mongoose');
const articleSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Articles',articleSchema)