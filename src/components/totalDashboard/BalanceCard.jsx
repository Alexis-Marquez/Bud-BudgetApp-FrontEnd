import React from "react";
import"../home/Home.css"
import BalanceNumber from "../BalanceNumber.jsx";
import BudgetNumber from "./BudgetNumber.jsx";
const BalanceCard = ({text, amount, limit})=>{
    if (limit){
        return(
            <div className="dashboard-number-card">
                <div>{text}</div>
                <div className="balance-number"><BudgetNumber amount={amount} limit={limit}></BudgetNumber></div>
            </div>
        )
    }
    return(
        <div className="dashboard-number-card">
            <div>{text}</div>
            <div className="balance-number"><BalanceNumber amount={amount}></BalanceNumber></div>
        </div>
    )
}
export default BalanceCard