import React, {useEffect, useState} from 'react'
import DashboardCard from "../totalDashboard/DashboardCard.jsx";
import "./Home.css"
import TransactionList from "../transactionList/TransactionList.jsx";
import api from "../../API/axiosConfig.js";
import SearchBar from "./SearchBar.jsx";
import TransFormModal from "./TransFormModal.jsx";
import EditBudgetButton from "./EditBudgetButton.jsx";
const Home = ({accounts, currBudget,getAccounts,getCurrBudget})=>{
    const [totalBalance, setTotalBalance] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const[showTransForm, setShowTransForm] = useState(false);
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
        <div id="page-body">
            <EditBudgetButton></EditBudgetButton>
            <SearchBar></SearchBar>
            <TransFormModal showTransForm={showTransForm} accounts={accounts} getTransactions={getTransactions} getAccounts={getAccounts} getCurrBudget={getCurrBudget} setShowTransForm={setShowTransForm}></TransFormModal>
            <DashboardCard AccountsTotalBalance={totalBalance} budgetBalance={currBudget}></DashboardCard>
            <div className="trans-button">
            <button className="add-trans-button" onClick={()=>setShowTransForm(true)}> Add Transaction</button>
            </div>
            <TransactionList transactions={transactions}></TransactionList>
        </div>
    )
}

export default Home