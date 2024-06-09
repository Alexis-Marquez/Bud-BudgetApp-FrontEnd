import React from "react";
import api from "../../API/axiosConfig.js";
const TransForm = ({accounts, handleClose})=>{
    const [formValue, setFormValue] = React.useState({
        Amount: '',
        DateTime: '',
        Name: '',
        AccountId: '',
        Category: '',
        Description: ''
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async() => {
        event.preventDefault();
            // make axios post request
        await api.post("/api/transactions/8da906f9-4e26-41e1-b9e3-2c1c1878e6bb",
            {
                Amount: formValue.Amount,
                DateTime: formValue.DateTime,
                AccountId: formValue.AccountId,
                Name: formValue.Name,
                Category: formValue.Category,
                Description: formValue.Description
            })
            .then((response) => {
                handleClose()
            console.log(response)})
        .catch (function (error)
        {
            console.log(error)
        })
    }

    return (
        <form className="form-transaction" onSubmit={handleSubmit} >
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="amount-input">Amount: </label>
                    <input type="text" placeholder="0.00" id="amount-input" inputMode="numeric" onChange={handleChange} name="Amount"/>
                </div>
                <div className="input-group">
                    <select id="account-input" name="AccountId" onChange={handleChange} defaultValue="">
                        <option value="" disabled >Choose an option</option>
                        {accounts.map((account) => (
                            <option key={account.accountId} value={account.accountId}>{account.name}</option>
                        ))}</select>
                </div>
                <div className="input-group">
                    <label htmlFor="datetime-input">Date and Time: </label>
                    <input type="datetime-local" placeholder="00:00" id="datetime-input" inputMode="numeric" onChange={handleChange} name="DateTime"/>
                </div>
                <div className="input-group">
                    <label htmlFor="name-input">Name: </label>
                    <input type="text" id="name-input" onChange={handleChange} name="Name"/>
                </div>
                <div className="input-group">
                    <label htmlFor="category-input">Category: </label>

                </div>
                <div className="input-group">
                    <label htmlFor="description-input">Description: (Optional) </label>
                    <textarea id="description-input" onChange={handleChange} name="Description"/>
                </div>
            </div>
            <button type="submit"> Submit</button>
        </form>
    )
}
export default TransForm;