import React, {useEffect, useState} from 'react'
import DashboardCard from "../totalDashboard/DashboardCard.jsx";
import "./Home.css"
import TransactionList from "../TransactionList/TransactionList.jsx";
import api from "../../API/axiosConfig.js";
const Home = ({accounts})=>{
    const [totalBalance, setTotalBalance] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const getTransactions = async () => {
        try{
            const response = await api.get("/api/transactions/8da906f9-4e26-41e1-b9e3-2c1c1878e6bb/1");
            setTransactions(response.data);
        }catch (err){
            return <p>Error: {err.message}</p>;
        }
    }
    let total = 0
    useEffect(()=>{
        accounts?.forEach((account)=>
        {
            total += account.balance
        })
        setTotalBalance(total)
        },[accounts]
    )
    useEffect(()=>{
        getTransactions()
    },[])
    if (totalBalance === null) {
        // Render a loading state or placeholder
        return <p>Loading...</p>;
    }
    if (accounts?.length===0){
        return <p>User not Found</p>;
    }
    return(
        <div className="page-body">
            <form className="search-bar-form">
                <p className="search-bar"> Hello</p>
            </form>
            <DashboardCard totalBalance={totalBalance}></DashboardCard>
            <div className="trans-button">
            <button className="add-trans-button"> Add Transaction</button>
            </div>
            <TransactionList transactions={transactions}></TransactionList>
        </div>
    )
}

export default Home