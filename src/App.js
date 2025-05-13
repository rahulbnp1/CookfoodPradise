import logo from './logo.jpeg';

import './App.css';
import Search from './components/searchBar/search';
import NavBar from './components/navBar/NavBar';
import CategoryBar from './components/category/CategoryBar';
import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';

function App() {
  return (<>
    <NavBar />
    <Search />
    <CategoryBar />
    <Contents />
    <br/>
    <Footer />

  </>
  );
}

export default App;
