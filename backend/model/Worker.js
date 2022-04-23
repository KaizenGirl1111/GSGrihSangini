const mongoose=require('mongoose')


const workerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    mobileNo:{
        type: Number,
        required: true
    },
    category:[{                      
       type: String,
       require: true
    }],
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})



const worker=mongoose.model('worker', workerSchema)
module.exports=worker