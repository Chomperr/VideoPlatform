import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Component = ({list = [] }) => {
    return (
        <nav className="sidebar">
            <img alt="Logo" src="/images/logo-gato.png" />
            {
                list.map(item => <Link id={item.id} key={item.id} className="item" to={item.link}>{item.title}</Link>)
            }
        </nav>
    )
}

export default Component