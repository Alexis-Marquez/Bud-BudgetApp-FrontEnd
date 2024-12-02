import ReactDOM from "react-dom";
import React, {useState} from "react";
import "./AccountBudgetModalStyles.css"
import userService from "../../services/userService.js";
import AccountModalForm from "./AccountModalForm.jsx";
const AccountModal = ({setShowNewAccountModal, showNewAccountModal, showBudgetModal, setShowBudgetModal})=>{
    const [showAccountForm, setShowAccountForm] = useState(false);
    const [showBudgetForm, setShowBudgetForm] = useState(false);
    if(!showNewAccountModal && !showBudgetModal){
        return null
    }
    const handleClose=()=>{setShowNewAccountModal(false);setShowAccountForm(false);setShowBudgetForm(false);
        setShowBudgetModal(false);window.location.reload();};

    async function handleCancel() {
        await userService.createAccount({"type": "default", "name": "default account"})
        handleClose();
    }

    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            {!showAccountForm && !showBudgetForm &&
                <div className="modal-budget-form-container">
                    <div className="modal-budget-header">
                        {showNewAccountModal&&<h2 className="modal-budget-title">It looks like you don't have an account set up</h2>}
                        {showBudgetModal&&<h2 className="modal-budget-title">Set up your monthly budget to start tracking!</h2>}
                    </div>

                    {showNewAccountModal&&
                    <div className="modal-body">
                        <div>An account will allow you to track your income and expenses</div>
                        <div>You can have multiple accounts to track different things if you wish!</div>
                        <div>(We will not ask for any banking details)</div>
                    </div>}

                    {showBudgetModal&&
                        <div className="modal-body">
                            <div>Your budget can track as many categories as you want</div>
                            <div></div>
                        </div>
                    }

                    <div className="modal-footer">
                        {showNewAccountModal &&
                            <div>
                                <div>
                                    <button onClick={handleCancel}>Skip and use default account</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setShowAccountForm(true);
                            }} className="next-page-modal"> Continue
                            </button>
                        </div>
                            </div>}
                    </div>
            </div>}
            {showAccountForm && <AccountModalForm handleClose={handleClose}></AccountModalForm>}
        </>
        , document.getElementById('page-body'));
}
export default AccountModal