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
import LandingPage from "../landingPage/LandingPage.jsx";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import BudgetModal from "../accountBudgetModal/BudgetModal.jsx";
import AccountsModal from "../accountBudgetModal/AccountsModal.jsx";
import LoadingSpinner from "../../LoadingSpinner.jsx";
const Home = ()=>{
    const navigate = useNavigate();
    const [totalBalance, setTotalBalance] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const[showTransForm, setShowTransForm] = useState(false);
    const [currBudget, setCurrBudget] = useState();
    const[showBudget, setShowBudget] = useState(false);
    const[showAccountModal, setShowAccountModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [accounts, setAccounts] = useState();
    const [transactionsNumber, setTransactionsNumber] = useState(0);
    const [showBudgetModal, setShowBudgetModal] = useState(false);

    let total = 0
    useEffect(() => {
            userService.getAllAccounts().then((response) => {
                    setAccounts(response.data);
                    userService.getTransactionsPage(1).then((response) => {
                        setTransactions(response.data);
                        userService.getLatestBudget().then((response) => {
                            setCurrBudget(response.data);
                            setCategories(currBudget.categories);
                            userService.getTransactionSize().then((response) => {
                                setTransactionsNumber(response);
                            })
                        })
                    })
                }
            ).catch((err)=>{
                if(err.response.status === 403) {
                    authService.logout();
                    navigate('/');
                }
            })
    }, []);

    useEffect(()=>{
            accounts?.forEach((account)=>
            {
                total += account.balance
            })
            setTotalBalance(total)
        if (accounts && accounts.length === 0) {
            setShowAccountModal(true);
        }
        if(!currBudget){
            setShowBudgetModal(true);
        }
        },[accounts]
    )

    if (totalBalance === null || !accounts) {
        return (<div id="page-body">
                <LoadingSpinner></LoadingSpinner>
        </div>
        )
    }
    return (
            <div id="page-body">
                <EditBudgetButton></EditBudgetButton>
                <SearchBar></SearchBar>
                <TransFormModal showTransForm={showTransForm} accounts={accounts} setShowTransForm={setShowTransForm}
                                categories={categories}></TransFormModal>
                <BudgetModal showBudget={showBudgetModal} setShowBudget={setShowBudgetModal}></BudgetModal>
                <AccountsModal setShowNewAccountModal={setShowAccountModal} showNewAccountModal={showAccountModal}></AccountsModal>
                <DashboardCard AccountsTotalBalance={totalBalance} budgetBalance={currBudget}></DashboardCard>
                <DashboardBudget showBudget={showBudget} transactionList={transactions}
                                 categories={categories}></DashboardBudget>
                <div className="trans-button">
                    <button className="add-trans-button" onClick={() => setShowTransForm(true)}> Add Transaction
                    </button>
                </div>
                <TransactionList transactions={transactions} transactionNumber={transactionsNumber}></TransactionList>
            </div>
        )
    }

export default Home