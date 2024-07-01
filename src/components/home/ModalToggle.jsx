import React from "react";
import "./ModalStyles.css"
const ModalToggle = ({handleToggle, isToggled}) => {
    return (
        <div className="modal-toggle">
            <p className="modal-toggle__text" style={{fontWeight: isToggled ? 'bolder' : 'lighter'}}>
                Income
            </p>
        <label className="switch">
            <input id="toggleSwitch" type="checkbox" onChange={handleToggle}></input>
            <span className="slider"></span>
        </label>
            <p className="modal-toggle__text" style={{fontWeight: isToggled ? 'lighter' : 'bolder'}}>
                Expense
            </p>
        </div>
    )
}
export default ModalToggle;