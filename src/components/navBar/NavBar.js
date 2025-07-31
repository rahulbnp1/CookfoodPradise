import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      id="navBar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/">
        <motion.img
          src={logo}
          alt="logo"
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="navLinks"
            className="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>LogIn/Sign Up</Link>
            <motion.div
              className='shopping'
              onClick={() => alert("Shopping section under Maintenance, It will soon come up")}
              whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <HiShoppingCart />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop nav */}
      <div className="navLinks-desktop">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">LogIn/Sign Up</Link>
        <motion.div
          className='shopping'
          onClick={() => alert("Shopping section under Maintenance, It will soon come up")}
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <HiShoppingCart />
        </motion.div>
      </div>
    </motion.div>
  );
}
