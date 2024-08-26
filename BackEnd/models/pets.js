const mongoose=require('mongoose');

const petSchema=new mongoose.Schema({
    pet_name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        required:true,
    }
})

const Pets=mongoose.model('pets',petSchema)

module.exports=Pets