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
    token:{
        type:String
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
    }
},{
    timestamps:true    //Note this is the second parameter passed to the schema
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