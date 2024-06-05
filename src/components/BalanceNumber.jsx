import React from "react";

const BalanceNumber = ({amount}) => {
    if(amount <= 0) {
        return (
            <div className="amount-negative">${amount}</div>
        )
    }
    else{
        return(
            <div className="amount-positive">${amount}</div>
        )}
}
export default BalanceNumber