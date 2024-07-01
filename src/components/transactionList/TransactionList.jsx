import "./TransactionList.css"
import BalanceNumber from "../BalanceNumber.jsx";
import React, {useEffect, useState} from "react";
import userService from "../../services/userService.js";
import NavButton from "./NavButton.jsx";
const TransactionList = ({transactions, transactionNumber}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const getTransactions = (page) => {
        userService.getTransactionsPage(page).then((response)=> {
        })
    }
    if(!transactions ) {
        return (
            <div className="transaction-list">
                <div className="transactionList_loading">
                    <p>Loading your most recent transactions...</p>
                </div>
            </div>
        )
    }
    if(transactions.length===0){
        return (
            <div className="transaction-list">
                <div className="transactionList_loading" style={{textAlign: "center", color:"lightgreen"}}>
                    <p>Add a transaction to start tracking your budget!</p>
                </div>
            </div>
        )
    }
    if (transactions && transactions.length === 0) {
        return (
            <div className="transaction-list">
                <div className="transactionList_empty">
                    <p>Your Transaction List is empty, try adding a transaction to start!</p>
                </div>
            </div>
        )
    }
    return(
        <div className="transaction-list">
            <p className="transaction-list-title">Recent Transactions</p>
            <div className="transaction-list-header">
                <p className="transaction-list-column-title-name">Transaction Name</p>
                <p className="transaction-list-column-title-category">Category</p>
                <p className="transaction-list-column-title-account">Account Name</p>
                <p className="transaction-list-column-title-date">Date</p>
                <p className="transaction-list-column-title-amount">Amount</p>
            </div>
            {transactions.map((transaction) => (
                <div className="transaction_element" key={transaction.id.timestamp + transaction.amount}>
                    <div className="transaction_element__name" key={transaction.userId + transaction.id}>
                        {transaction.name}
                    </div>
                    <div className="transaction_element__category" key={transaction.userId + transaction.category}>
                        {transaction.category}
                    </div>
                    <div className="transaction_element__account" key={transaction.accountId}>
                        {transaction.accountName}
                    </div>
                    <div className="transaction_element__date" key={transaction.time + transaction.id}>
                        {String(new Date(transaction.time).getMonth()).padStart(2, "0")}/{String(new Date(transaction.time).getDate()).padStart(2,'0')}/{new Date(transaction.time).getFullYear()}
                    </div>
                    <div className="transaction_element__amount" key={transaction.id + transaction.amount}>
                        {<BalanceNumber amount={transaction.amount}></BalanceNumber>}
                    </div>
                </div>
            ))}
            <div className="transaction-list-nav">
                <NavButton className="nav-btn" currentPage={currentPage} getTransactions={getTransactions} itemsPerPage="5" size={transactionsNumber} type="first" setCurrentPage={setCurrentPage}></NavButton>
                <NavButton className="nav-btn" currentPage={currentPage} getTransactions={getTransactions} itemsPerPage="5" size={transactionsNumber} type="previous" setCurrentPage={setCurrentPage}></NavButton>
                <NavButton className="nav-btn" currentPage={currentPage} getTransactions={getTransactions} itemsPerPage="5" size={transactionsNumber} type="next" setCurrentPage={setCurrentPage}></NavButton>
                <NavButton className="nav-btn" currentPage={currentPage} getTransactions={getTransactions} itemsPerPage="5" size={transactionsNumber} type="last" setCurrentPage={setCurrentPage}></NavButton>
            </div>
        </div>
    )
}
export default TransactionList;