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
import MainPage from './components/mainPage/MainPage';
import Upload from './components/upload/Upload';
import Error from './components/error/Error';
import SideBar from './components/sideBar/SideBar';
import Dashboard from './components/sideBar/Dashboard';
import LogOut from './components/sideBar/LogOut';
import NavBar from './components/navBar/NavBar';



const allRoutes = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/about", element: <AboutUs />},
  {path: "/contact", element: <ContactUs />},
  {path: "/signUp", element: <SignUp />},
  {path: "/login", element: <LogIn />},
  {path: "/uploadingDas", element: <UploadingDas />},
  {path: "/mainPage", element: <MainPage />},
  {path: "/upload", element: <Upload />},
  {path: "/sideBar", element: <SideBar />},
  {path: "/dashboard", element: <Dashboard />},
  {path: "/logOut", element: <LogOut />},
  {path: "*", element: <Error />}

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
