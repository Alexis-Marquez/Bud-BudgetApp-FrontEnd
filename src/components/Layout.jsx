import {Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import TopBar from "./topBar/TopBar.jsx";
import Home from "./home/Home.jsx";
import api from "../API/axiosConfig.js";

const Layout = () => {
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
        <main>
            <TopBar></TopBar>
            <Home accounts={accounts}/>
            <Outlet/>
        </main>
    )
    }
export default Layout;