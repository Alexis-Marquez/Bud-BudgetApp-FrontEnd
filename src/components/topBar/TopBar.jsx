import React from 'react';
import InfoCardNav from "./InfoCardNav.jsx";
import "./TopBar.css";
import Profile from "./Profile.jsx";
const TopBar = () => {
    return (
        <nav className="top-bar">
            <div className="top-bar-left">
            <h1 className="logo-text">Budget</h1>
            </div>
            <div className="top-bar-center">
           <InfoCardNav ></InfoCardNav>
            </div>
            <div className="top-bar-right">
            <Profile> </Profile>
            </div>
        </nav>
    )
}
export default TopBar;