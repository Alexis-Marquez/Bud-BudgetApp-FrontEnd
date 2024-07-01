import {Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import TopBar from "./topBar/TopBar.jsx";
import Home from "./home/Home.jsx";
import userService from "../services/userService.js";


const Layout = () => {

    return (
        <main>
            <TopBar></TopBar>
            <Home />
            <Outlet/>
        </main>
    )
    }
export default Layout;