const mongoose=require('mongoose');

mongoose.set('strictQuery', false);
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("connected successfully");
        
    } catch (error) {
        console.log(error);
    }
}
module.exports=connectDB;