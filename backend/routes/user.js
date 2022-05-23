const mongoose=require('mongoose')
const express=require('express')
const User=require('../model/User')
const router=new express.Router()
const send = require('../mailer/mailer');
const jwt = require('jsonwebtoken');
const verifyToken=require('../middleware/auth');


//SIGNUP-ENDPOINT
router.post('/userSignUp',(req,res)=>{
    const user=new User(req.body)   
    user.save()
    .then(()=>{
        const mailOptions ={
            from:"no-reply@gmail.com", 
            to:user.email, 
            subject: "Welcome to GrihSangini", 
            html:   `<h3>Hi ${user.name},<h3 />
                    <h4>Welcome to GrihSangini.<h4 />
                    <p>You have successfully created an account on GrihSangini. We’re thrilled to see you here!</p>
                    <p>
                    At GrihSangini we're trying to build a LinkedIn for low wage workers and a platform for
                    employers for easy and fast hiring. We provide upskilling certification for our workers in their domains and equip them
                    with latest government schemes for them so that they can be better financially planned.
                    </p>
                    <p>
                    We’re confident that GrihSangini will help you to get the best worker for your work
                    </p>
                    <p>
                    Thank You !!
                    </p>`
                }
                
                send(mailOptions)
                return res.status(201).send(user);
            })
    .catch(e=>{
        res.status(400).send('Something went Wrong!!')
    })
        
})


//LOGIN-ENDPOINT
router.post('/userLogin',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token=jwt.sign({_id:user._id},'hello')
        if (user) {
            user.token=token;
            await user.save();
            res.status(201).send({user,token});
        } 
    } 
    catch(e){
        res.status(400).send('Something went wrong!!')
    }
})

module.exports=router