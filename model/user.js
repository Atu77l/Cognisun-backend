const mongoose=require('mongoose');

const product=new mongoose.Schema({
    name:String,
    detail:String,
   
});

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cart:[product],
});


module.exports=mongoose.model('user',userSchema);