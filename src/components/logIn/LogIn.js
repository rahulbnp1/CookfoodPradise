import NavBar from "../navBar/NavBar";
import CategoryBar from "../category/CategoryBar";
import Footer from "../footer/Footer";
import Vector1 from './Vector1.webp';
import './LogIn.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Copyright from "../copyright/Copyright";

export default function LogIn() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const UserData = (e) => {
        const dataOfUser = {
            userName,
            password,
        }
        console.log(dataOfUser);
        navigate("/sideBaar");
    }

    const SignupPage = (e) => {
        navigate("/signUp");
    }

    return(<>
    <NavBar />
    {/* <Search /> */}
    {/* <CategoryBar /> */}
   
      <div id="login">
        <div id="login-Form">
            <h1>Log in</h1>
                UserId: <input type="text" placeholder="Enter your userId"
                 onChange={e => setUserName(e.target.value)}></input> <br />
                 Pasword: <input type="password" placeholder="Enter your password"
                 onChange={e => setPassword(e.target.value)}></input> <br />
                <button onClick={UserData}>LogIn</button> <br />
       <p> Dont have Account?<span onClick={SignupPage}> SignUp</span> </p>
        </div>
        <div id="login-Image">
                  
        <img src={Vector1} alt="login" />
        </div>
    </div>
    <Footer />
    <Copyright />
    </>)
}