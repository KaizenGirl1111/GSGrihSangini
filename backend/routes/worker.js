const mongoose=require('mongoose');
const express=require('express')
const Worker=require('../model/Worker')
const router=new express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

//SIGNUP-ENDPOINT
router.post('/workerSignUp',async (req,res)=>{
    const worker=new Worker(req.body)
    try{
        const token=jwt.sign({_id:worker._id},'hello')
        worker.token=token;
        await worker.save()
        res.status(201).send({worker,token})
    }catch(e){
        res.status(400).send('Something went Wrong!!')
    }
})


//LOGIN-ENDPOINT
router.post('/workerLogin',async (req,res)=>{
    try{
        const worker = await Worker.findOne({mobileNo: req.body.mobileNo })
        if (!worker) {
            throw new Error('unable to login')
        }
        const isMatch = await bcrypt.compare(req.body.password, worker.password)
        if (!isMatch) {
            throw new Error('unable to login')
        }
        const token=jwt.sign({_id:worker._id},'hello')
        worker.token=token;
        await worker.save()
        res.send({worker,token}) 
    }catch(e){
        res.status(400).send('Something went wrong!!')
    }
})

module.exports=router