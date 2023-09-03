const express = require('express');
const router = express.Router();
const Article=require('./../model/model')
router.get('/new',(req,res)=>{
    res.send('new')
})
router.post('/blogs',(req,res)=>{
    const article= new Article({
        
    })
})

module.exports = router;