import axios from "axios";
import { useEffect, useState } from "react";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profilePictureName, setProfilePictureName] = useState("");
  const [profilePictureType, setProfilePictureType] = useState("");

  const navigate = useNavigate();
  


  useEffect(() => {
    axios.get(`http://localhost:9090/register/1202`)
    .then((response) => {
        const p = response.data;
        setFirstName(p.firstName);
        setLastName(p.lastName);
        setEmail(p.email);
        setPassword(p.password);
        setUserName(p.userName);
        setProfilePicture(p.profilePicture);
        setProfilePictureName(p.profilePictureName);
        setProfilePictureType(p.profilePictureType);
    })
    .catch((error) => {
        console.log(error);
    })
    
  }, []);



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

  const handleSaveChanges = () => {
    axios.put(`http://localhost:9090/register/1202`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      userName: userName,
      profilePicture: profilePicture,
      profilePictureName: profilePictureName,
      profilePictureType: profilePictureType,
    })
    .then((response) => {
      console.log(response.data);
      navigate('/sideBaar/MyProfile');
    })
  }



  return (<>
  <h2>Update Your Profile</h2>
    <div className="profile-container">
      
      <div className="profile-left">
        <strong>First Name:</strong>
       <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <strong>Last Name:</strong>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <strong>Email:</strong>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <strong>Password:</strong>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

        <strong>Username:</strong>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>

     <div className="profile-right">
      <div className="profile-picture">
         {profilePicture && (
            <img
             src={`data:${profilePictureType};base64,${profilePicture}`}
             alt="Profile"
             className="profile-image"/>)}<br />
          <strong>Profile Picture:</strong>
         <input type="file" onChange={handleImageChange} />

         <button className="update-button" onClick={handleSaveChanges}>Update Profile</button> <br />
         <button className="update-button" onClick={()=> navigate('/sideBaar/MyProfile')}>Cancle</button>
        </div>
      </div>

    </div>
 </> );
}
