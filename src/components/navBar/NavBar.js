import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';
import { HiShoppingCart } from "react-icons/hi";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="navBar">
      <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div id="navLinks" className={menuOpen ? 'open' : ''}>        
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>LogIn/Sign Up</Link>
        <div className='shopping' onClick={()=> alert("Shopping section under Maintainance, It will soon come up")}> 
          <HiShoppingCart /> 
        </div>
        
      </div>
    </div>
  );
}
