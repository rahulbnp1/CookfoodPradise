import './ContactUs.css';
import NavBar from '../navBar/NavBar';
import Search from '../searchBar/search';
import CategoryBar from '../category/CategoryBar';
import Footer from '../footer/Footer';

export default function ContactUs() {
    return (<>
     <NavBar />
                <Search />
                <CategoryBar />
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>

        <Footer />
        </>
    );
}
