import React from "react";
import "./ModalStyles.css"
const ModalToggle = ({handleToggle}) => {
    return (
        <div className="modal-toggle">
            <p className="modal-toggle__text">
                Income
            </p>
        <label className="switch">
            <input id="toggleSwitch" type="checkbox" onChange={handleToggle}></input>
            <span className="slider"></span>
        </label>
            <p className="modal-toggle__text">
                Expense
            </p>
        </div>
    )
}
export default ModalToggle;