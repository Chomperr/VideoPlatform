import React from "react";
import './style.css';

export default ({ list = [], clickMenu }) => {
    return (
        <ul className="sidebar">
            <img alt="Logo" src="/images/logo-gato.png" />
            {
                list.map(item => <li id={item.id} key={item.id} className="item" onClick={clickMenu}>{item.title}</li>)
            }
        </ul>
    )
}