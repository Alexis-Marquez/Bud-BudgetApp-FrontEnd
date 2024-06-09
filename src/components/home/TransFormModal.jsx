import React from 'react';
import ReactDOM from 'react-dom';
import "./ModalStyles.css";
import TransForm from "./TransForm.jsx";
const TransFormModal = ({showTransForm, handleClose, accounts, setAccounts}) => {
    if (!showTransForm || !accounts || !accounts.length) {
        return null;
    }
    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
        <div className="modal-form-container">
            <div className="modal-header"> Add a Transaction</div>
            <div className="modal-body">
                <TransForm className="form-transaction" handleClose={handleClose} accounts={accounts}></TransForm>
            </div>
            <button onClick={handleClose}>Close</button>
    </div></>, document.getElementById('page-body'));
}
export default TransFormModal;