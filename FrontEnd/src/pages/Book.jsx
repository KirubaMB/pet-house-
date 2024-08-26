import React, { useState } from "react"
import Head from "./Head";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Book(){
    const location=useLocation();
    const navigate=useNavigate();

    const dogname=location.state;
    const [form,setForm]=useState({
        name:"",
        phone:"",
        date:"",
        time:"",
        dog_name:dogname || "",
        
    })
    
    const submit=async (e)=>{
        e.preventDefault();
        console.log(form)
       try{
          const response=await axios.post("http://localhost:3000/pethouse/booking",{
            name:form.name,
            phone:form.phone,
            date:form.date,
            time:form.time,
            dog_name:form.dog_name,
          });

          console.log(response.data);

          const booking_detail={
            name:form.name,
            phone:form.phone,
            date:form.date,
            time:form.time,
            dog_name:form.dog_name,
          }


          setForm({
            name:"",
            phone:"",
            date:"",
            time:"",
            dog_name:dogname || "",
          })

         
         navigate('/complete',{state:booking_detail})
       }catch(err){
          console.log(err);
       }
    }
    
    return(
        <>
          <Head />
          <div className="big-book-container">
            <div className="book-container">
                <main>
                <div className="pet-img">
                   <div>
                    <h1>{dogname}</h1>
                   </div>
                 </div>
                 <form onSubmit={submit}>
                  <input type="text" name="name" onChange={(e)=>{setForm({...form,name:e.target.value})}} placeholder="Your name" required/>
                  <input type="tel" name="phone" onChange={(e)=>{setForm({...form,phone:e.target.value})}} placeholder="phone number" required/>
                  <input type="date" name="date" onChange={(e)=>{setForm({...form,date:e.target.value})}} required/>
                  <input type="time" name="time" onChange={(e)=>{setForm({...form,time:e.target.value})}} required/>
                  <input type="text" name="dog" value={dogname} onChange={(e)=>{setForm({...form,dog_name:e.target.value})}} required readOnly/>
                  <button type="submit" className="book">Submit</button>
                 </form>
                </main>
            </div>

          </div>
        </>
    )
}

export default Book