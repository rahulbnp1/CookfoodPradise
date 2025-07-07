import Search from './components/searchBar/search';
import NavBar from './components/navBar/NavBar';
import CategoryBar from './components/category/CategoryBar';
import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';

export default function Home() {
  return (
    <div>
          <NavBar />
          <Search />
          <CategoryBar />
          <Contents />
          <br/>
          <Footer />
          <Copyright />
    </div>
  )
}