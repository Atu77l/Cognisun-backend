const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
    name:String,
    category:String,
    detail:String,
    password:String
});


module.exports=mongoose.model('product',productSchema);