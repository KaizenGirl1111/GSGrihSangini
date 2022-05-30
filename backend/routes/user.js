const mongoose=require('mongoose')
const express=require('express')
const User=require('../model/User')
const router=new express.Router()
const send = require('../mailer/mailer');
const crypto = require('crypto');
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
        const user = new User(req.body);   
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
        await send(mailOptions);
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

async function getKey() {
    

}

router.post('/forgotPassword',async (req,res)=>{
    try{
        const buffer = await new Promise((resolve, reject) => {
            crypto.randomBytes(32, function(ex, buffer) {
                if (ex) {
                    reject({Message:"Error generating token"});
                }
                resolve(buffer);
            });
        })
        const resetToken = buffer.toString("hex");
        const user = await User.findOne({email:req.body.email})
        user.resetToken = resetToken;
        user.expireToken = Date.now() + 1200000;
        await user.save();

        const resetLinkMsg = `<p>Hello,${user.name}!</p>
                              <p>You have requested to reset your password</p>
                              <p>Please <a href='http://localhost:3000/reset-password/${resetToken}'>Click here </a>to change the password</p>`
        const resetLinkOptions = {
            from:"no-reply@gmail.com", 
            to:user.email, 
            subject: "Reset-password", 
            html: resetLinkMsg
        }
        await send(resetLinkOptions);
        res.status(200).send("Please check your email")

    }catch(e){
        throw e;
    }
});    
    

router.post('/reset-password',async (req,res)=>{
    try{
        const token = req.body.token;
        const user = await User.findOne({resetToken:token,expireToken:{$gt:Date.now()}});
        user.password = req.body.password;
        await user.save();
    }catch(e){
        console.log(e);
    } 
})

module.exports=router
