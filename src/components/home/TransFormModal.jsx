import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./ModalStyles.css";
import TransForm from "./TransForm.jsx";
const TransFormModal = ({showTransForm, setShowTransForm, getTransactions, getAccounts, getCurrBudget, accounts}) => {
    const [isToggled, toggle] = useState(true);
    const handleToggle = () => {
        toggle(!isToggled);
    };
    const handleClose=()=>{setShowTransForm(false); getTransactions();getAccounts();getCurrBudget();toggle(true);};
    if (!showTransForm || !accounts || !accounts.length) {
        return null;
    }
    let textTitle;
    if(isToggled){
        textTitle=" Income"
    }
    else{
        textTitle=" an Expense"
    }
    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
        <div className="modal-form-container"  >
            <div className="modal-header"> Add {textTitle}</div>
            <div className="modal-body">
                <TransForm className="form-transaction" handleClose={handleClose} accounts={accounts} handleToggle={handleToggle} isToggled={isToggled}></TransForm>
            </div>
            <button onClick={handleClose}>Close</button>
    </div></>, document.getElementById('page-body'));
}
export default TransFormModal;