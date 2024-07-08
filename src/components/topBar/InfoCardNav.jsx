import React from 'react';
import "./TopBar.css"
import {Link} from "react-router-dom";
const InfoCardNav = () => {
    return(
        <div className="info-nav">
            <Link to="/interest-calculator" className="top-text">Interest Calculator </Link>
            <Link to="/house-affordability-calculator" className="top-text">House Affordability Calculator </Link>
            <Link to="/budget" className="top-text" >My Budget</Link>
        </div>
    )
}
export default InfoCardNav;