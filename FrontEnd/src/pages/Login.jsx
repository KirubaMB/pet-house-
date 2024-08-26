import React, { useState } from 'react';
import Head from './Head';
import Cat from '../assets/peeking.png';
import '../index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [form, setForm] = useState({
    name: '',
    password: '',
  });

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('http://localhost:3000/pethouse/login', {
        name: form.name,
        password: form.password,
      });
      console.log(response.data);
      
      setForm({
        name: '',
        password: '',
      });
      
      const data={
        name:form.name,
        password:form.password
      }

        
        navigate("/pets",{state:data})
    
      
    } catch (error) {
      console.error('There was an error logging in:', error);
    }
  };

  return (
    <>
      <Head />
      <div className="container">
        <div className="log-container">
          <img src={Cat} className="top-img" alt="top pic" />
          <div className="form-container box">
            <h1>SignIn</h1>
            <form onSubmit={submit}>
              <label htmlFor="username">UserName:</label>
              <input
                type="text"
                name="username"
                className="log-input"
                value={form.name}
                required
                autoComplete="off"
                autoFocus
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="log-input"
                value={form.password}
                required
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button type="submit" className="submit2">LogOn</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
