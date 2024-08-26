import React, { useState } from 'react'
import Head from './Head'
import Detective from '../assets/detective.png'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'




const Register = () => {
  const navigate=useNavigate();
  const [form,setForm]=useState({
    name:'',
    password:''
  })
  
  const submit=async(e)=>{
     try{
      e.preventDefault();
       const response=await axios.post("http://localhost:3000/pethouse/new_user/",{
        name:form.name,
        password:form.password,
       })
       console.log(response.status);

       const data={
         name:form.name,
         password:form.password
       }



       setForm({
        name: '',
        password: '',
      });

        navigate("/pets",{state:data})
      
       
     }catch(err){
        alert("Username Already exist!!!");
        console.log(err);
     }
    
  }


  return (
    <>
    <Head />
    <div className="container">
    <div className="reg-container">
        <img src={Detective} className="top-img2" alt="top pic" />
        <div className="form-container reg-form">
            <h1>SignUp</h1>
            <form onSubmit={submit}>
                <label htmlFor="username">UserName:</label>
                <input 
                type="text"  
                name="username" 
                required 
                autoComplete="off" 
                autoFocus 
                onChange={(e)=>{setForm({...form,name:e.target.value})}}/>
                <label htmlForfor="password">Password:</label>
                <input 
                type="password" 
                name="password" 
                required 
                onChange={(e)=>{setForm({...form,password:e.target.value})}}/>
                <button type="submit" className="reg-submit">Register</button>
            </form>
  
        </div>
    
    </div>
</div>
    </>
  )
}

export default Register