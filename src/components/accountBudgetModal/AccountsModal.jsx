import ReactDOM from "react-dom";
import React, {useState} from "react";
import "./AccountBudgetModalStyles.css"
import userService from "../../services/userService.js";
import AccountModalForm from "./AccountModalForm.jsx";
const AccountModal = ({setShowNewAccountModal, showNewAccountModal})=>{
    const [showForm, setShowForm] = useState(false);
    if(!showNewAccountModal){
        return null
    }
    const handleClose=()=>{setShowNewAccountModal(false);setShowForm(false);window.location.reload();};

    async function handleCancel() {
        await userService.createAccount({"type": "default", "name": "default account"})
        handleClose();
    }

    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            {!showForm && <div className="info-modal">
                <div className="modal-budget-form-container">
                    <div className="modal-budget-header">
                        <h2 className="modal-budget-title">It looks like you don't have an account set up</h2>
                    </div>
                    <div className="modal-body">
                        <div>An account will allow you to track your income and expenses</div>
                        <div>You can have multiple accounts to track different things if you wish!</div>
                        <div>(We will not ask for any banking details)</div>
                    </div>
                    <div className="modal-footer">
                        <div>
                            <button onClick={handleCancel}>Skip and use default account</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setShowForm(true);
                            }} className="next-page-modal"> Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
            {showForm && <AccountModalForm handleClose={handleClose}></AccountModalForm>}
        </>
        , document.getElementById('page-body'));
}
export default AccountModal