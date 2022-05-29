const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user : process.env.GMAIL,
        pass : process.env.PASSWORD
    }
});

async function send(mailOptions)
{
    return new Promise(function(resolve, reject){
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                reject("Couldn't send mail");
            }else{
                resolve();
            }
        })
    
    })
}

module.exports = send;
