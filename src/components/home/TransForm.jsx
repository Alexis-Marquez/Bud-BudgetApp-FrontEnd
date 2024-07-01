import React, {useEffect, useState} from "react";
import api from "../../API/axiosConfig.js";
import ModalToggle from "./ModalToggle";
const TransForm = ({accounts, handleClose, isToggled, handleToggle, categories})=>{

    const [formValue, setFormValue] = React.useState({
        Amount: '',
        DateTime: '',
        Name: '',
        AccountId: '',
        Category: '',
        Description: '',
        Type: ''
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = async() => {
        event.preventDefault();
        let type;
        let amount;
        if(isToggled){
            type = "income"
            amount=formValue.Amount
        }else{
            type="expense"
            amount = -formValue.Amount
        }
            // make axios post request
        await api.post("/api/transactions/8da906f9-4e26-41e1-b9e3-2c1c1878e6bb",
            {
                amount: amount,
                dateTime: formValue.DateTime,
                accountId: formValue.AccountId,
                name: formValue.Name,
                category: formValue.Category,
                description: formValue.Description,
                type: type
            })
            .then((response) => {
                handleClose()})
        .catch (function (error)
        {
            console.log(error)
        })
    }
    return (
        <form className="form-transaction" onSubmit={handleSubmit}
              style={{background: isToggled ? 'rgb(103,134,103)' : 'rgb(107,47,47)'}}>
            <ModalToggle handleToggle={handleToggle} isToggled={isToggled}></ModalToggle>
            <div className="form-body">
                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="amount-input">Amount: </label>
                        <input type="text" placeholder="00.00" id="amount-input" inputMode="numeric"
                               onChange={handleChange}
                               name="Amount"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="name-input">Name: </label>
                        <input type="text" id="name-input" placeholder="Name for your transaction" onChange={handleChange} name="Name"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="category-input">Category: </label>
                    <select id="account-input" name="Category" onChange={handleChange} defaultValue="">
                        <option value="" disabled>Choose a category</option>
                        {categories?.map((category) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}</select>
                </div>
                <div className="input-group">
                    <label htmlFor="account-input">Account</label>
                    <select id="account-input" name="AccountId" onChange={handleChange} defaultValue="">
                        <option value="" disabled>Choose an account</option>
                        {accounts.map((account) => (
                            <option key={account.accountId} value={account.accountId}>{account.name}</option>
                        ))}</select>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group-col">
                    <label htmlFor="datetime-input">Date: </label>
                    <input type="date" placeholder="00:00" id="datetime-input" inputMode="numeric"
                           onChange={handleChange} name="DateTime"/>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group-col">
                    <label htmlFor="description-input">Description: </label>
                    <textarea id="description-input" onChange={handleChange} placeholder="Optional short description" name="Description"/>
                </div>
            </div>
            <button type="submit" style={{backgroundColor: isToggled ? 'rgb(103,134,103)' : 'rgb(107,47,47)'}}> Submit</button>
        </form>
    )
}
export default TransForm;