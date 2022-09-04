const express = require("express");
const router = express.Router();
const Items = require('../models/Itemsmodel');




router.post('/add', async(req,res)=>{
    const {code,description} = req.body
    console.log(code);
    let item =new Items({
        code:code,
        description:description

                    
    }).save(function(err, doc){
        if(err) res.json(err);
        else   return res.send({doc});
    })})

    
router.get('/details',async(req,res)=>{

         const item =await Items.find();
        res.send({item})
})

module.exports =router;

