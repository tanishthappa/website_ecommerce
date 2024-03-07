import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const state =useSelector((state)=>state.HandleCart)
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('loggedin')
    navigate('/')
  }

  const isLogin = localStorage.getItem('loggedin')
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg py-3 ">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bolder fs-3" style={{color:'#265073'}} to="/">Clothing</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold fs-5">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>  
        <li  className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>  
        <li  className="nav-item">
          <NavLink className="nav-link" to="/allproduct">Product</NavLink>
        </li>  
      </ul>
    </div>
    <div className="buttons" >
              <NavLink to="/" className="btn btn-outline-dark"style={{color:'#2D9596'}}>
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2"style={{color:'#2D9596'}}>
                Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2"style={{color:'#2D9596'}}>
                Cart ({state.length})
              </NavLink>
              {
                isLogin && <button onClick={handleLogout}  className="btn btn-outline-dark ms-2"style={{color:'#2D9596'}}>Logout </button>
              }
            </div>
  </div>
</nav>
    </>
  )
}

export default Navbar