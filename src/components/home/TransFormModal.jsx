import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./ModalStyles.css";
import TransForm from "./TransForm.jsx";
const TransFormModal = ({showTransForm, setShowTransForm, accounts, categories}) => {
    const [isToggled, toggle] = useState(true);
    const handleToggle = () => {
        toggle(!isToggled);
    };
    const handleClose=()=>{setShowTransForm(false);window.location.reload();toggle(true);};
    if (!showTransForm || !accounts || !accounts.length) {
        return null;
    }
    let textTitle;
    if(isToggled){
        textTitle=" Income"
    }
    else{
        textTitle=" Expense"
    }
    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className="modal-form-container" style={{borderColor: isToggled ? 'rgb(159,238,159)' : 'rgb(250,36,36)'}} >
                <div className="modal-header">
                    <div className="modal-header-section">
                    </div>
                    <div className="modal-header-section">
                        <h2>Add {textTitle}</h2>
                    </div>
                    <div className="modal-header-button-section">
                        <button className="btn-close" onClick={handleClose} style={{borderColor: isToggled ? 'rgb(159,238,159)' : 'rgb(250,36,36)'}}>X</button>
                    </div>
                </div>
                <div className="modal-body">
                    <TransForm className="form-transaction" handleClose={handleClose} accounts={accounts} handleToggle={handleToggle} isToggled={isToggled} categories={categories}></TransForm>
                </div>
            </div></>, document.getElementById('page-body'));
}
export default TransFormModal;