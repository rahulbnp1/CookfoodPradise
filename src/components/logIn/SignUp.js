import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import Vector1 from "./Vector1.webp";
import "./SignUp.css";
import axios from "axios";
import Copyright from "../copyright/Copyright";

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [profilePictureType, setProfilePictureType] = useState('');
  const [profilePictureName, setProfilePictureName] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  

  const navigate = useNavigate();

  const postData = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }


    if (firstName === '') {
      setFirstNameError('First name is required');
    }else {
      setFirstNameError('');
    }

    if (lastName === '') {
      setLastNameError('Last name is required');
    }else {
      setLastNameError('');
    }

    if (userName === '') {
      setUserNameError('User name is required');
    }else {
      setUserNameError('');
    }

    if (email === '') {
      setEmailError('Email is required');
    }
    else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Password is required');
    }else {
      setPasswordError('');
    }

    if (confirmPassword === '') {
      setConfirmPasswordError('Confirm password is required');
    }else {
      setConfirmPasswordError('');
    }



    const userData = {
      firstName,
      lastName,
      userName,
      email,
      password,
      profilePicture,
      profilePictureType,
      profilePictureName
    };

  if(firstName !== '' && lastName !== '' && userName !== '' && email !== '' && password !== '' && confirmPassword !== '' ) {

    axios.post("http://localhost:9090/register", userData)
      .then((res) => {
        console.log(res.data);
        alert("User registered successfully!");
        navigate("/logIn");
      })
      .catch((err) => {
        console.log(err);
      });
    }

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePictureName(file.name);
      setProfilePictureType(file.type);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setProfilePicture(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <NavBar />
      <div id="signup">
        <form id="signup-form">
          <h1>Register Yourself</h1>

          <div className="input-row">
            <div className="input-group">
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Enter your First Name"
                required
              />
    {firstNameError && <span className="error">{firstNameError}</span>}
            </div>
            <div className="input-group">
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Enter your Last Name"
                required
              />
    {lastNameError && <span className="error">{lastNameError}</span>}
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              User Name:
              <input
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="Enter your User Name"
                required
              />
    {userNameError && <span className="error">{userNameError}</span>}
            </div>
            <div className="input-group">
              Email:
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
    {emailError && <span className="error">{emailError}</span>}
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              Password:
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your Password"
                required
              />
    {passwordError && <span className="error">{passwordError}</span>}
            </div>
            <div className="input-group">
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
    {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              Profile Picture:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {profilePictureName && (
                <p style={{ color: "gray", fontStyle: "italic" }}>
                  Selected file: {profilePictureName}
                </p>
              )}
            </div>
          </div>

          <button type="button" onClick={postData} className="btn btn-primary">Sign Up</button>

          <p>
            Already Registered?{" "}
            <span className="sign-in-link" onClick={() => navigate("/logIn")}>
              Sign In
            </span>
          </p>
        </form>

        <div id="signup-image">
          <img src={Vector1} alt="signup" />
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}
