import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import './Footer.css';
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="footer">

      <div id="footer-section">
        <h2>Contact Info</h2>
        <p>Host & Founder</p> 
        <MdEmail /> &nbsp; <a href="mailto:cookfoodparadise@gmail.com">cookfoodparadise@gmail.com</a>
        <p>Manager & Co-founder</p>
         <MdEmail /> &nbsp; <a href="mailto:official.rahulbnp@gmail.com">official.rahulbnp@gmail.com</a>
      </div>

      <div id="footer-section">
        <h2>Follow us on Social Media</h2>
        <ul>
          <li><FaYoutube /> &nbsp; <a href="https://www.youtube.com/@CookfoodParadise">YouTube</a></li>
          <li><FaFacebook /> &nbsp; <a href="https://www.facebook.com/cookfoodparadise/">Facebook</a></li>
          <li><FaInstagram /> &nbsp; <a href="https://www.instagram.com/cookfoodparadise/">Instagram</a></li>
          <li><FaTwitter /> &nbsp; <a href="https://x.com/cookfoodparadis">Twitter</a></li>
        </ul>
      </div>

      <div id="footer-section">
        <h2>Find Us on the Map</h2>
        <div className="map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234447.15551212864!2d85.15651250337554!3d23.34343381744094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1747072771061!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
