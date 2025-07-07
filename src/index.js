import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './components/contactUs/ContactUs';
import SignUp from './components/logIn/SignUp';
import LogIn from './components/logIn/LogIn';
import UploadingDas from './components/upload/Upload';
import AboutUs from './components/aboutUs/AboutUs';
import Upload from './components/upload/Upload';
import Error from './components/error/Error';
import SideBaar from './components/sideBar/SideBaar';
import Dashboard from './components/sideBar/Dashboard';
import LogOut from './components/sideBar/LogOut';
import Copyright from './components/copyright/Copyright';
import AllPost from './components/contents/AllPost';
import Recipe from './components/RecipePage/Recipe';
import MyProfile from './components/sideBar/MyProfile';
import EditPost from './components/sideBar/EditPost'
import EditProfile from './components/sideBar/EditProfile';
import RecipesByCat from './components/contents/RecipesByCat';
import SearchedRecipe from './components/searchBar/SearchedRecipe';

const allRoutes = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/about", element: <AboutUs />},
  {path: "/contact", element: <ContactUs />},
  {path: "/signUp", element: <SignUp />},
  {path: "/login", element: <LogIn />},
  {path: "/uploadingDas", element: <UploadingDas />},
  {path: "/upload", element: <Upload />},
  {path: "/recipe/:id", element: <Recipe />},
  {path: "/allPost", element: <AllPost />},
  {path: "/error", element: <Error />},
  {path: "/logout", element: <LogOut />},
  {path: "/copyright", element: <Copyright />},
  {path: "/myProfile", element: <MyProfile />},
  {path: "/editPost/:id", element: <EditPost />},

  {path: "/sidebaar", element: <SideBaar />},
  {
    path: "/sidebaar",
    element: <SideBaar />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "upload", element: <Upload /> },
      { path: "myProfile", element: <MyProfile /> }, 
      { path: "editProfile", element: <EditProfile /> }, 
      {path: "editPost/:id", element: <EditPost />},
    ],
  },
  {path: "/dashboard", element: <Dashboard />},
  {path: "/logOut", element: <LogOut />},
  {path: "copyright", element: <Copyright />},
  {path: "*", element: <Error />},
  {path: "/signUp", element: <SignUp />},
  {path: "/allposts", element: <AllPost />},
  {path: "/recipeByCat/:id", element: <RecipesByCat />},
  {path: "/searchedbyname", element: <SearchedRecipe /> }



]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
