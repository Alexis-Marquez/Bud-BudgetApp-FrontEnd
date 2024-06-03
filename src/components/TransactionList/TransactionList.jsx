import "./TransactionList.css"
const TransactionList = ({transactions}) => {
    return(
        <div className="transaction-list">
            <p className="transaction-list-title">Recent Transactions</p>
            <div className="transaction-list-header">
                <p className="transaction-list-column-title-name">Transaction Name</p>
                <p className="transaction-list-column-title-account">Account Name</p>
                <p className="transaction-list-column-title-date">Date and Time</p>
                <p className="transaction-list-column-title-amount">Transaction Amount</p>
            </div>
            {transactions?.map((transaction) => (
                <div className="transaction_element" key={transaction.id}>
                    <div className="transaction_element__name">
                        {transaction.name}
                    </div>
                    <div className="transaction_element__account">
                        {transaction.accountName}
                    </div>
                    <div className="transaction_element__date">
                        {transaction.time}
                    </div>
                    <div className="transaction_element__amount">
                        {transaction.amount}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TransactionList;