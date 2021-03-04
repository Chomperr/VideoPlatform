import React, { useState, useEffect} from "react";
import './style.css';

function Page({ onClose, children}) {
    const handleClose = evnt => {
        if (evnt.target && evnt.target.id === 'modal_container') {
            if (typeof (onClose) === 'function')
            onClose();
        }
    }
    return (
        <div id="modal_container" className="modal_container" onClick={handleClose}>
            <div className="modal_content">
                {children}
            </div>
        </div>
    )
}
export default Page;