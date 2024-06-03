import React from "react";
import BalanceCard from "./BalanceCard.jsx";
import"../home/Home.css"

const DashboardCard = ({totalBalance})=>{
    return(
        <div className="dashboard-card">
            <BalanceCard amount={0} text={"Current Margin For The Month"}></BalanceCard>
            <BalanceCard amount={totalBalance} text={"Current Savings Balance"}></BalanceCard>
        </div>
    )
}
export default DashboardCard