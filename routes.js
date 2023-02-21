const express=require('express');
const Router=express.Router();
const user=require('./model/user')
const product1=require('./model/add')

Router.post('/user',async(req,res)=>{
     try {
        console.log(req.body);
        const data1=req.body;
        const response=new user(data1);
        console.log("after"+response);
        const result=await response.save();
        res.send(result);
     } catch (error) {
        console.log(error);
        res.send(error);
     }
})
Router.post('/add',async(req,res)=>{
    try {
        console.log(req.body);
        const response=new product1(req.body);
        const data=await response.save();
        res.send(data);
       console.log(response);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})
//isko bas sahi karna hai
Router.post('/cart/:userid',async(req,res)=>{
    console.log(req.body);
    try {
        const response=await user.findOne({_id:req.params.userid});
        response.cart.push(req.body);
        console.log(response);
        const result=await user.updateOne({_id:req.params.userid,$set:response})
        res.send(result)
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})
Router.get('/cart_item/:id',async(req,res)=>{
    console.log(req.params.id);
    try {
        const response=await user.findOne({_id:req.params.id});
        res.send(response);
    } catch (error) {
        response.send(error);
    }
})
Router.get('/item',async(req,res)=>{
    try {
        const data=await product1.find();
        console.log(data);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})
module.exports=Router;