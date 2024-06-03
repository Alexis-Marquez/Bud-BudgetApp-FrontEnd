import React from "react";
import"../home/Home.css"
const BalanceCard = ({text, amount})=>{
    return(
        <div className="dashboard-number-card">
            <div>{text}</div>
            <div id="balance-number">${amount}</div>
        </div>
    )
}
export default BalanceCard