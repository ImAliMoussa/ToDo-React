import React from "react";
import "./navbar.styles.scss";
import {ReactComponent as Logo} from "bootstrap-icons/icons/alarm.svg";
import GoogleButton from "react-google-button";
import {signInWithGoogle} from "../../firebase/firebaseUtils";
import Avatar from "react-avatar";

const Navbar = ({user}) => {
    console.log({user});
    if (user) console.log({id: user.uid});
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <Logo className="icon d-inline-block mr-1"/>
                    <span className="text">ToDo-est</span>
                </a>
                <div>
                    {
                        user ? <Avatar size="2rem" name={user.displayName} round src={user.photoURL}/>

                            : <GoogleButton onClick={signInWithGoogle} type="light"/>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;