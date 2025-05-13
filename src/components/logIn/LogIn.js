import NavBar from "../navBar/NavBar";
import CategoryBar from "../category/CategoryBar";
import Footer from "../footer/Footer";
import Vector1 from './Vector1.webp';
import './LogIn.css';
import { useNavigate } from "react-router-dom";

export default function LogIn() {

    const navigate = useNavigate();


    const UserData = (e) => {
        navigate("/sideBar");
    }

    return(<>
    <NavBar />
    {/* <Search /> */}
    {/* <CategoryBar /> */}
   
      <div id="login">
        <div id="login-Form">
            <h1>Log in</h1>
                UserId: <input type="text" placeholder="Enter your userId"
                 onChange={UserData}></input> <br />
                 Pasword: <input type="password" placeholder="Enter your password"
                 onChange={UserData}></input> <br />
                <button onClick={UserData}>LogIn</button> <br />
       <p> Dont have Account?<span onClick={UserData}> SignUp</span> </p>
        </div>
        <div id="login-Image">
                  
        <img src={Vector1} alt="login" />
        </div>
    </div>
    <Footer />
    </>)
}