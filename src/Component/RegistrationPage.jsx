import React, { useState } from 'react';
import { Navigate, useNavigate,NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navi=useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const isUsernameExists = storedUsers.some((user) => user.username === formData.username);

    if (isUsernameExists) {
      setError('Username is already taken. Please choose a different one.');
    } else {
     
      const newUser = { ...formData };
      storedUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));

      
      alert('Registration successful!');
      navi('/login')
    
    }
  };

  return (
    <div>
      <h1 className='d-flex justify-content-center py-3'>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>  
         
         
      </form>
      <div className='d-flex justify-content-center'> 
        <NavLink className="btn btn-outline-success" style={{width:'320px'}}  to="/">Already Register</NavLink>
         
      </div> 
      </div>
      
  );
};

export default RegistrationPage;