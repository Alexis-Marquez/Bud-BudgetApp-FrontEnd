import "./TransactionList.css"
import BalanceNumber from "../BalanceNumber.jsx";
const TransactionList = ({transactions}) => {
    if(!transactions || !transactions.length) {
        return (
            <div className="transaction-list">
                <div className="transactionList_loading">
                    <p>Loading your most recent transactions...</p>
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
                <p className="transaction-list-column-title-date">Date and Time</p>
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
                        {transaction.time}
                    </div>
                    <div className="transaction_element__amount" key={transaction.id + transaction.amount}>
                        {<BalanceNumber amount={transaction.amount}></BalanceNumber>}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TransactionList;