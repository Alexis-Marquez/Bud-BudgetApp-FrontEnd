import React from "react";
import BalanceCard from "./BalanceCard.jsx";
import"../home/Home.css"

const DashboardCard = ({AccountsTotalBalance, budgetBalance})=>{
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthName = monthNames[currentMonth];
    return(
        <div className="dashboard-card">
            <BalanceCard amount={budgetBalance?.currentBalance} limit={budgetBalance?.budgetMax} text={"Current margin for "+currentMonthName}></BalanceCard>
            <BalanceCard amount={AccountsTotalBalance} text={"Current Accounts Balance"}></BalanceCard>
        </div>
    )
}
export default DashboardCard