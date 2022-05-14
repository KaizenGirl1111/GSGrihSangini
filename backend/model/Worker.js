const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const workerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    mobileNo: {
        type: Number,
        unique: true,
        required: true
    },
    category: [{
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

workerSchema.pre('save', async function (next) {
    const worker = this
    if (worker.isModified('password')) {
        worker.password = await bcrypt.hash(worker.password, 8)
    }
    next()
})


const worker = mongoose.model('Worker', workerSchema)
module.exports = worker