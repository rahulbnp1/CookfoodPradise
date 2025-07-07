import logo from './logo.jpeg';

import './App.css';
import Search from './components/searchBar/search';
import NavBar from './components/navBar/NavBar';
import CategoryBar from './components/category/CategoryBar';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';
import AllPost from './components/contents/AllPost';

function App() {
  return (<>
    <NavBar />
    <Search />
    <CategoryBar />
    <AllPost />
    <br/>
    <Footer />
    <Copyright />

  </>
  );
}

export default App;
