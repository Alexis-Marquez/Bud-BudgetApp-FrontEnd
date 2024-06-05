import api from './API/axiosConfig.js';
import {useState, useEffect} from 'react';
import Layout from './components/Layout.jsx';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home.jsx';
function App() {
    // eslint-disable-next-line no-unused-vars
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Layout/>}>
              </Route>
          </Routes>
    </div>
        )
}
export default App
