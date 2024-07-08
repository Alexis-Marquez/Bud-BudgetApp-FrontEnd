import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import authService from "../../services/authService.js";
import {useNavigate} from "react-router-dom";
import "./TopBar.css"
const ProfileImg=()=>{

}
function Chevron(){
    return(
        <ExpandMoreIcon />
    )
}
const Profile = ({setShowLogin}) => {
    const navigate = useNavigate();
    return(
        <div className="profile-div">
            {authService.getCurrentUser()== null &&<button className="sign-in-btn" style={{boxShadow: '0 0 2px 2px #747bff'}} onClick={() => {navigate("/"); setShowLogin(true)}}> Login </button>}
            {authService.getCurrentUser()!= null &&<button className="sign-in-btn" style={{boxShadow: '0 0 2px 2px lightgreen'}} onClick={async () => {
                await authService.logout();
                navigate("/");
            }}> Sign Out </button>}
    {/*<Chevron className = "chevron-profile"></Chevron>*/}
        </div>
)
}
export default Profile;