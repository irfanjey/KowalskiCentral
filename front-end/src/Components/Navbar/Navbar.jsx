import React from 'react';
import logo from '../Assets/kowalski_logo.png';
import './Navbar.css';

const Navbar = () => {
  //const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img className="logo_img" src={logo} alt=""/>
            <div className="logo_text">
              <p>Kowalski</p>
              <p>Central</p>
            </div>
        </div>
        <div>
          <ul>
            <li>Analysis</li>
          </ul>
        </div>
    </div>
  )
}
export default Navbar