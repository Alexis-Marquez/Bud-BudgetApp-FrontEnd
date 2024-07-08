import ReactDOM from "react-dom";
import "./Login.css"
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import React from "react";
import TransForm from "../home/TransForm.jsx";
const LoginModal = ({showLogin, showSignUp, setShowLogin, setShowSignUp}) => {
    const handleClose=()=>{setShowLogin(false);setShowSignUp(false);window.location.reload()};
    if (showLogin || showSignUp) {
    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className="login-modal">
                <div className="modal-header">
                    <div className="modal-header-section">
                    </div>
                    <div className="modal-header-section">
                        {showLogin && <h2>Login</h2>}
                        {showSignUp && <h2>Sign Up</h2>}
                    </div>
                    <div className="modal-header-button-section">
                        <button className="btn-close" onClick={handleClose}>X
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    {showLogin&&<LoginForm setShowLogin={setShowLogin} setShowSignUp = {setShowSignUp}></LoginForm>}
                    {showSignUp&&<SignUpForm setShowLogin={setShowLogin} setShowSignUp={setShowSignUp}></SignUpForm>}
                </div>
            </div>
        </>
        , document.getElementById('landing-page')
    )
    }
    else {
        return null
    }
}
export default LoginModal