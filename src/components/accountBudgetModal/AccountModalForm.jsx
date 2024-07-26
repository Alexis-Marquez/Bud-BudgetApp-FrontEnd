import "./AccountBudgetModalStyles.css"
import {useForm} from "react-hook-form";
import React from "react";
import userService from "../../services/userService.js";
const AccountModalForm = ({handleClose}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const [formValue, setFormValue] = React.useState({
        name: '',
        type: '',
        balance: ''
    });
    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }
    const submit = async (e) => {
        e.preventDefault()
        console.log(formValue);
        await userService.createAccount(formValue);
        handleClose();
    }
    return(
            <div className="modal-budget-form-container">
            <div className="account-modal-form_body">
                <form onSubmit={submit}>
                    <div className="modal-section">
                        <label htmlFor="Name">Account Name</label>
                        <input type="text" id="Name" placeholder="My Savings" name="name"
                               {...register("name",{required: true, onChange:(e)=>{handleChange(e)}})}></input>
                    </div>
                    <div className="modal-section">
                        <label htmlFor="Type">Account Type</label>
                        <input id="Type" type="text" name="type" placeholder="Savings"
                               {...register("type",{required: true, onChange:(e)=>{handleChange(e)}})}></input>
                    </div>
                    <div className="modal-section">
                        <label htmlFor="Initial Balance">Initial Balance: </label>
                        <input id="InitialBalance" type="number" name="balance" placeholder="Your balance: "
                               {...register("balance",{required: true, onChange:(e)=>{handleChange(e)}})}></input>
                    </div>
                    <button className="modal-form-submit" type="submit">Submit</button>
                </form>
            </div>
            </div>
    )
}
export default AccountModalForm;