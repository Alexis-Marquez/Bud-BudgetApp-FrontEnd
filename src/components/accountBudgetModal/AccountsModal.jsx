import ReactDOM from "react-dom";
import React from "react";

const BudgetModal = ({setShowNewAccountModal, showNewAccountModal})=>{
    if(!showNewAccountModal){
        return null
    }
    const handleClose=()=>{setShowNewAccountModal(false);window.location.reload();};
    return ReactDOM.createPortal(
        <>
            <div className="overlay">
            </div>
            <div className="budget-modal">
                <div className="modal-header">
                    <div className="modal-header-section">
                    </div>
                    <div className="modal-header-section">
                        <h2></h2>
                    </div>
                    <div className="modal-header-button-section">
                        <button className="btn-close" onClick={handleClose}
                        >X
                        </button>
                    </div>
                </div>
                <div className="modal-body">

                </div>
            </div>
        </>
        , document.getElementById('page-body'));
}
export default BudgetModal