const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/GrihSangini',{})
const connectToDatabase=()=>{console.log("Connected")}
module.exports=connectToDatabase

/* const mongoose=require('mongoose')

const connectToDatabase=()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/GrihSangini', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => {
            console.log("database connected");

        })
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectToDatabase */