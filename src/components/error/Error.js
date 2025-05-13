import NavBar from '../navBar/NavBar';
import Search from '../searchBar/search';
import CategoryBar from '../category/CategoryBar';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';
import './Error.css'; 

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Search />
      <CategoryBar />

      <div className="error-container">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')}>Go Back to Home</button>
      </div>

      <Footer />
    </>
  );
}
