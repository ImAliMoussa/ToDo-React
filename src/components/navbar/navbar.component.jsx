import React from "react";
import "./navbar.styles.scss";
import {ReactComponent as Logo} from "bootstrap-icons/icons/check2-square.svg";
import AvatarWithDropdown from "../navbar-avatar-with-dropdown/navbar-avatar-with-dropdown.component";
import {auth} from "../../firebase/firebaseinit";

const Navbar = () => {
    const user = auth.currentUser;
    let navbarLeftStr = "ToDos";
    if (user) navbarLeftStr = user.displayName + "'s " + navbarLeftStr;
    return (
        <nav className="navbar navbar-light bg-light p-0 shadow-sm small-outline">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Logo className="icon d-inline-block mr-1"/>
                    <span className="text">{navbarLeftStr}</span>
                </a>
                <AvatarWithDropdown/>
            </div>
        </nav>
    );
}

export default Navbar;