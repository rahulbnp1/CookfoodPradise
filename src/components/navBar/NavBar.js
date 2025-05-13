import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function NavBar() {
  return( <>

    <div id="navBar">
      <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
      <div id="navLinks">
        <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/login">LogIn/Sign Up</Link>
      </div>

    </div>
    </>
  )
}