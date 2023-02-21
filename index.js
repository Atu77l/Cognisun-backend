const express=require('express');
const connectDB=require('./db')
require('dotenv').config();
const routes=require('./routes');
const app=express();
const cors=require('cors');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
connectDB();
app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use(routes);
app.listen(5000,()=>{
    console.log("listening at port");
})