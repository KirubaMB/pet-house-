const User=require('../models/users')
const passport=require('passport')
const Book=require("../models/books")

const get_info=(req,res)=>{
    res.send("<h1>There are some pets here</h1>")
}

const get_id=(req,res)=>{
    const id=req.params.id;
    res.send(`<h1>Requested id is ${id}</h1>`)
}

const get_post = async (req, res) => {
    const name=req.body.name;
    const password=req.body.password;
    
    console.log(req.body);
    try{
        let isUser=await User.findOne({name:name})
        if(isUser){
            if(isUser.password==password){
                res.status(201).json({message:"Loged in successfully!!!"});
            }else{
                res.status(404).json({message:"User not found try signUp!!!"});
            }
        }
    }catch(err){
        return  res.status(500).json({message:"Server side error"});
    }
    
  };
  
const new_user=async (req,res)=>{
    const name=req.body.name;
    const password=req.body.password;

    console.log(req.body);
    try{
        let user=await User.findOne({name:name})
        console.log(user);
        if(user){
            console.log("User already exist!!!");
           res.status(401).json({message:"username already exist!!!"})
        }else{
            const newUser=await User.create(req.body);
             res.status(201).json({message:"User created!!!"});
        }
    
    }catch(err){
         return res.status(501).json({message:"server error"});
    }
    
   
}
  
const book_pet = async (req,res)=>{
  
   try{
     const data=req.body
     console.log(data)
     const books= await Book.create(req.body)

     res.status(201).json({message:"Successful Order"})
   }catch(err){
     console.log(err);
     res.status(501).json({message:"Error @ server"})
   }
}
  

module.exports={
    get_id,
    get_info,
    get_post,
    new_user,
    book_pet
}