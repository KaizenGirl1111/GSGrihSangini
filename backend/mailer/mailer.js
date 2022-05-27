const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user : "ashneergrover77@gmail.com",
        pass : 'chutiyaashneer'
    }
});

function send(mailOptions)
{
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("mail sent ");
        }
    })
}

module.exports = send;
