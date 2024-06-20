import React from "react";

const BudgetNumber = ({amount, limit}) => {
    if(amount < limit) {
        return (
            <div className="amount-positive">${amount} / ${limit} spent</div>
        )
    }
    else{
        return(
            <div className="amount-negative">${amount} / ${limit} spent</div>
        )}
}
export default BudgetNumber