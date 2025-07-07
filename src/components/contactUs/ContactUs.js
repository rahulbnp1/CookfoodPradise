import './ContactUs.css';
import NavBar from '../navBar/NavBar';
import Search from '../searchBar/search';
import CategoryBar from '../category/CategoryBar';
import Footer from '../footer/Footer';
import Copyright from '../copyright/Copyright';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    
        const message1 = {
            name,
            email,
            subject,
            message
        }

            axios.post("http://localhost:9090/message", message1 )
            .then((response) => {
                console.log(response);
                alert("Message sent successfully")
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
         })
    }



    return (<>
    <NavBar />
    <Search />
    <CategoryBar />

        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Your Name" required />
                <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Your Email" required />
                <input type="text" onChange={(e)=> setSubject(e.target.value)} placeholder="Subject" required />
                <textarea onChange={(e)=> setMessage(e.target.value)} placeholder="Your Message" rows="5" required></textarea>
                <button type="button" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>

        <Footer />
        <Copyright />
        </>
    );
}
