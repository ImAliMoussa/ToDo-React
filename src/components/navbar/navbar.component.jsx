import React from "react";
import "./navbar.styles.scss";
import {ReactComponent as Logo} from "bootstrap-icons/icons/alarm.svg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <Logo className="icon d-inline-block mr-1"/>
                    <span className="text">ToDo-est</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;