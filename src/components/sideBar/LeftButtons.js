import { FaUpload } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import "./LeftButtons.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function LeftButtons() {

    const navigate = useNavigate();
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

    return (
        <>
        <br />
        <div className="leftButtons" onClick={() => navigate("/sidebaar/myProfile")}>
          <div className="small-profilepic">
            {userData?.profilePicture && (
              <img
              src={`data:${userData.profilePictureType};base64,${userData.profilePicture}`}
              alt="Profile"
              className="profile-image1"
              />
             )}        
        </div>
            <p id="username">@{userData?.userName}</p>
        </div>
        
        <div className="leftButtons" onClick={()=> navigate("/sidebaar/dashboard")}>
          <PiCookingPotFill /><p>My Content</p>
        </div>
        <div className="leftButtons" onClick={() => navigate("/sidebaar/upload")}>
          <FaUpload /><p>Upload Recipe</p>
        </div>
        <div className="leftButtons" onClick={()=> navigate("/sidebaar/myProfile")}>
         <CgProfile /><p>My Profile</p>
        </div>
        
        <div className="leftButtons" onClick={()=> navigate("/sidebaar/editProfile")}>
         <FaUserEdit /><p>Edit Profile</p>
        </div>
        <div className="leftButtons" onClick={()=> navigate("/login")}>
         <IoMdLogOut /><p>LogOut</p>
        </div>

        
        </>
    )
}