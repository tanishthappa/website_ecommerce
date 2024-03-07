import React, { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const Navigate = useNavigate();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const OnRegister=(e)=>{
    e.preventDefault();
    Navigate('/register')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      console.log(storedUsers)
      
      const user = storedUsers.find(u => u.username === formData.username);
  
     
      if (user && user.password === formData.password) {
   
        alert('success')
        localStorage.setItem('loggedin',true);
        Navigate('/home');
      } else {
        
        alert('Invalid username or password');
      }
    
    
  };

  return (
    <div   >
      <h1 className='d-flex justify-content-center py-5'>Login Page</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <div className='d-flex justify-content-center'> 
      <NavLink className="btn btn-outline-success" style={{width:'280px'}} to="/register">Register</NavLink>
      {/* <button  type='submit' style={{width:'300px'}} onSubmit={OnRegister}>Register</button> */}
      </div> 
    </div>
   
  );
};

export default LoginPage;