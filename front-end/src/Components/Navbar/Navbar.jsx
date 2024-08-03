import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/kowalski_logo.png';
import './Navbar.css';

const Navbar = () => {
  //const [menu, setMenu] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img className="logo_img" src={logo} alt=""/>
            <div className="logo_text">
              <p>Kowalski</p>
              <p>Central</p>
            </div>
        </div>
        <div className='nav_login'>
          {loggedIn 
            ? 
            <button>Logout</button>
            :
            <Link to="/login">
              <button>Login</button>
            </Link>
          }
        </div>
    </div>
  )
}
export default Navbar