import './App.css'
import api from './API/axiosConfig.js';
import {useState, useEffect} from 'react';
import Layout from './components/Layout.jsx';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home.jsx';
function App() {
    // eslint-disable-next-line no-unused-vars
    const [accounts, setAccounts] = useState();
    const getAccounts = async () => {
    try{
        const response = await api.get("/api/12343dsfg/AllAccounts");
        console.log(response.data);
        setAccounts(response.data);
    }catch (err){
        console.log(err);
    }
    }

    useEffect(()=>{
        getAccounts();
    },[])

  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}></Route>
              </Route>
          </Routes>
    </div>
        )
}
export default App
