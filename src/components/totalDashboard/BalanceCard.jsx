import React from "react";
import"../home/Home.css"
import BalanceNumber from "../BalanceNumber.jsx";
const BalanceCard = ({text, amount})=>{
    return(
        <div className="dashboard-number-card">
            <div>{text}</div>
            <div className="balance-number"><BalanceNumber amount={amount}></BalanceNumber></div>
        </div>
    )
}
export default BalanceCard