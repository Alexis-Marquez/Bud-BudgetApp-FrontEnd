import './App.css'
import api from './API/axiosConfig.js';
import {useState, useEffect} from 'react';
import Layout from './components/Layout.jsx';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home.jsx';
function App() {
    // eslint-disable-next-line no-unused-vars
    const getAccounts = async () => {
    try{
        const response = await api.get("/api/8da906f9-4e26-41e1-b9e3-2c1c1878e6bb/all-accounts");
        setAccounts(response.data);
    }catch (err){
        return <p>Error: {err.message}</p>;
    }
    }
    const [accounts, setAccounts] = useState();

    useEffect(()=> {
        getAccounts();
    },[])

  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home accounts={accounts}/>}></Route>
              </Route>
          </Routes>
    </div>
        )
}
export default App
