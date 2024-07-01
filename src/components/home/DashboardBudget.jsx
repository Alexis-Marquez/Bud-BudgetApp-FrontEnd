import React from "react";
import {forEach} from "react-bootstrap/ElementChildren";

const DashboardBudget = ({categories, transactionList, showBudget})=>{
    const currentMonth = new Date().getMonth() + 1;
    const [month, setMonth] = React.useState(currentMonth);
    if(showBudget) {
        return (
            <div className="DashboardTransactions">
                {categories.map(category => (
                    <div key={category.id}>{category.name}: {category.balance}/{category.total}</div>
                ))}
            </div>
        )
    }
}
export default DashboardBudget;