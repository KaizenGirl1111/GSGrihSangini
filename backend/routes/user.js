const mongoose=require('mongoose')
const express=require('express')
const User=require('../model/User')
const router=new express.Router()
const send = require('../mailer/mailer');
const jwt = require('jsonwebtoken');
const verifyToken=require('../middleware/auth');

const welcomeMsg = `<h3>Hello,<h3 />
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
//SIGNUP-ENDPOINT
router.post('/userSignUp',async(req,res)=>{
    try{
        const user = await new User(req.body);   
        if(user)
        {
            const token=jwt.sign({_id:user._id},'hello')
            user.token=token;
            await user.save();
            res.status(201).send({user,token});
        }

        const mailOptions ={
            from:"no-reply@gmail.com", 
            to:user.email, 
            subject: "Welcome to GrihSangini", 
            html: welcomeMsg  
        }
        send(mailOptions);
    }
    catch(e){
        res.status(400).send('Something went wrong!!');
    }   
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