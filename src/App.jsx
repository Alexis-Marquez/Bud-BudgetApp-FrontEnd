import React, {useState, useEffect} from 'react';
import Layout from './components/Layout.jsx';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import LandingPage from "./components/landingPage/LandingPage.jsx";
import AffordabilityCalcLayout from "./components/affordabilityCalc/AffordabilityCalcLayout.jsx";
function App() {
    const [loginModal, setShowLogin] = useState(false);
    const [signUpModal, setShowSignup] = useState(false);
  return (
      <div className="App">
          <Routes>
              <Route path="/Budget" element={<Layout/>}></Route>
              <Route path="/" element={<LandingPage setShowLogin={setShowLogin} loginModal={loginModal} setShowSignup={setShowSignup} signUpModal={signUpModal}/>}> </Route>
              <Route path="/house-affordability-calculator" element={<AffordabilityCalcLayout setShowLogin={setShowLogin}/>}></Route>
          </Routes>
    </div>
        )
}
export default App
