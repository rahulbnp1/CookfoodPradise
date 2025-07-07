import axios from "axios";
import { useEffect, useState } from "react";
import "./MyProfile.css";

export default function MyProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9090/register/1202`)
      .then((res) => {
        setUserData(res.data);
        console.log("Full userData response:", res.data);
      })
      .catch((err) => {
        console.log("Error fetching user data:", err);
      });
  }, []);

  return (<>
 <h2> <strong style={{ color: 'rgb(59, 1, 1)' }}>User Name: </strong>@{userData?.userName}</h2>
    <div className="profile-container">

      <div className="profile-right">
        {userData?.profilePicture && (
          <img
            src={`data:${userData.profilePictureType};base64,${userData.profilePicture}`}
            alt="Profile"
            className="profile-image"
          />
        )}
        <br />
        
      </div>


      <div className="profile-left">
        <strong>First Name:</strong>
        <p>{userData?.firstName}</p>

        <strong>Last Name:</strong>
        <p>{userData?.lastName}</p>

        <strong>Email:</strong>
        <p>{userData?.email}</p>

        <strong>Username:</strong>
        <p>{userData?.userName}</p>
      </div>

      
      
    </div>
 </> );
}
