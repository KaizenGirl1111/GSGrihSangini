require('./db/mongoose.js')
const express=require('express')
const cors = require('cors');
const app=express()
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cors())

const userRoute=require('./routes/user')
app.use(userRoute)

const workerRoute=require('./routes/worker')
app.use(workerRoute)

app.listen(port,()=>{
    console.log("Backend server is listening on port 5000")
})