import React, {useEffect, useState} from 'react'
import DashboardCard from "../totalDashboard/DashboardCard.jsx";
import "./Home.css"
import TransactionList from "../transactionList/TransactionList.jsx";
import SearchBar from "./SearchBar.jsx";
import TransFormModal from "./TransFormModal.jsx";
import EditBudgetButton from "./EditBudgetButton.jsx";
import DashboardBudget from "./DashboardBudget.jsx";
import userService from "../../services/userService.js";
import authService from "../../services/authService.js";
const Home = ()=>{
    const [totalBalance, setTotalBalance] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const[showTransForm, setShowTransForm] = useState(false);
    const [currBudget, setCurrBudget] = useState();
    const[showBudget, setShowBudget] = useState(false);
    const [categories, setCategories] = useState([]);
    const [accounts, setAccounts] = useState();
    const [transactionsNumber, setTransactionsNumber] = useState(0);

    let total = 0
    useEffect(() => {
        authService.login("qewfhf@gmail.com", "1234").then((response)=> {
            console.log(authService.getCurrentUser());
            userService.getAllAccounts().then((response)=> {
                setAccounts(response.data);
                userService.getTransactionsPage(1).then((response)=> {
                    setTransactions(response.data);
                    userService.getLatestBudget().then((response)=> {
                        setCurrBudget(response.data);
                        setCategories(currBudget.categories);
                        userService.getTransactionSize().then((response)=>{
                            setTransactionsNumber(response);
                        })
                    })
                })
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                // setContent(_content);
            }
        );
        })
    }, []);

    useEffect(()=>{
            accounts?.forEach((account)=>
            {
                total += account.balance
            })
            setTotalBalance(total)
        },[accounts]
    )

    if (totalBalance === null || !accounts) {
        return (<div id="page-body">
                <p>Loading...</p>
        </div>
        )
    }
    if (accounts.length===0){
        return (
            <div id="page-body">
            <p>User not Found</p>
            </div>
    )
    }
    return(
        <div id="page-body">
            <EditBudgetButton></EditBudgetButton>
            <SearchBar></SearchBar>
            <TransFormModal showTransForm={showTransForm} accounts={accounts} setShowTransForm={setShowTransForm} categories={categories}></TransFormModal>
            <DashboardCard AccountsTotalBalance={totalBalance} budgetBalance={currBudget}></DashboardCard>
            <DashboardBudget showBudget={showBudget} transactionList={transactions} categories={categories}></DashboardBudget>
            <div className="trans-button">
            <button className="add-trans-button" onClick={()=>setShowTransForm(true)}> Add Transaction</button>
            </div>
            <TransactionList transactions={transactions} transactionNumber={transactionsNumber}></TransactionList>
        </div>
    )
}

export default Home