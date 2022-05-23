const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
         type:Number
    },
    description: {
         type:String
    },
    mobileNo: {
        type: Number,
        unique: true,
        required: true
    },

   /*  category: [{
        type: String,
        require: true
    }], */
    email:{
        type:String,
        required:true,
    },


    category: [{
        name:{
            type:String,
        },
        expirience:{
            type:Number
        },
        salary : {
            type:Number
        }
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

workerSchema.pre('save', async function (next) {
    const worker = this
    if (worker.isModified('password')) {
        worker.password = await bcrypt.hash(worker.password, 8)
    }
    next()
})


const worker = mongoose.model('Worker', workerSchema)
module.exports = worker