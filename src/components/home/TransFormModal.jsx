import React from 'react';
import ReactDOM from 'react-dom';
import "./ModalStyles.css";
const TransFormModal = ({showTransForm, handleClose}) => {
    if (!showTransForm) {
        return null;
    }
    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
        <div className="modal-form-container">
        <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-body">
                <form onSubmit={handleClose}>
                    <div className="form-group">Hello</div>
                </form>
            </div>
            <button onClick={handleClose}>Close</button>
        </div>
    </div></>, document.getElementById('page-body'));
}
export default TransFormModal;