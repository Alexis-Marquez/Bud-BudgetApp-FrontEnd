import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import authService from "../../services/authService.js";
const ProfileImg=()=>{

}
function Chevron(){
    return(
        <ExpandMoreIcon />
    )
}
const Profile = () => {
    return(
        <div className="profile-div">
    <ProfileImg className="profile-picture"></ProfileImg>
    <Chevron className = "chevron-profile"></Chevron>
        </div>
)
}
export default Profile;