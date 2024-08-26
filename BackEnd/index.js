const express = require('express')
const pets = require('./Routes/pets')
const cors = require('cors')
const mongoose=require('mongoose')


const app=express();
const port=3000;

mongoose.connect('mongodb://localhost:27017/pethouse')

app.use(express.json())
app.use(cors())
app.use("/pethouse",pets);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})