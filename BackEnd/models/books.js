const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    dog_name:{
        type:String,
        required:true,
    },
    createdAt: { type: Date, default: Date.now, expires: '7d' } 
})

const Book=mongoose.model('bookings',bookSchema)
module.exports=Book