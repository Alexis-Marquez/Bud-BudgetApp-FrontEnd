import TopBar from "../topBar/TopBar.jsx";
import React, {useEffect, useState} from "react";
import "./LandingPage.css"
import {Link} from "react-router-dom";
import LoginModal from "../login/LoginModal.jsx";
import authService from "../../services/authService.js";

const LandingPage = ({loginModal, setShowLogin, signUpModal, setShowSignup}) => {
    const currUser = authService.getCurrentUser();
    function showLogin() {
        setShowLogin(true)
    }

    function showSignUp() {
        setShowSignup(true)
    }

    if (authService.getCurrentUser()=== null) {
        return (<div id="landing-page">
                <LoginModal showLogin={loginModal} showSignUp={signUpModal} setShowLogin={setShowLogin}
                            setShowSignUp={setShowSignup}></LoginModal>
                <TopBar setShowLogin={setShowLogin} ></TopBar>
                <div className="landing-page-content">
                    <div className="landing-page-body">
                        <div className="landing-page-links">
                            <h1 className="LandingPageText">Welcome to Leaf budgeting app!</h1><h2>To use the budget
                            planner please <a className="link" onClick={showLogin}> sign in</a> or <a className="link"
                                                                                                      onClick={showSignUp}> create
                                an account</a></h2>
                            <h3>Or you can use our <Link to="/house-affordability-calculator">house affordability calculator</Link> and
                                <Link to="/interest-calculator"> interest calculator</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LandingPage;