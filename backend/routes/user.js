/* eslint-disable no-unused-vars */
const mongoose=require('mongoose')
const express=require('express')
const User=require('../model/User')
const router=new express.Router()


//SIGNUP-ENDPOINT
router.post('/userSignUp',async (req,res)=>{
    const user=new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send('false')
    }
})


//LOGIN-ENDPOINT
router.post('/userLogin',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        res.send(user) 
    }catch(e){
        res.status(400).send('false')
    }
})

module.exports=router