require('./db/mongoose.js')
const cors=require('cors')

const express=require('express')
const app=express()
app.use(cors())

const port=process.env.PORT || 5000
app.use(express.json())


const userRoute=require('./routes/user')
app.use(userRoute)

const workerRoute=require('./routes/worker')
app.use(workerRoute)

app.listen(port,()=>{
    console.log("Backend server is listening on port 5000")
})