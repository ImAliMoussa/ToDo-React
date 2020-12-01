import React from 'react';
import './navbar-avatar-with-dropdown.styles.scss';
import Avatar from "react-avatar";
import GoogleButton from "react-google-button";
import {signInWithGoogle, signOut} from "../../firebase/firebaseAuthUtils";
import {auth} from "../../firebase/firebaseinit";

const AvatarWithDropdown = () => {
    const user = auth.currentUser;
    return (
        <div className="dropdown pr-0 py-0">
            {
                user ?
                    <a className="nav-link" id="navbarDropdownMenuLink"
                       role="button" data-toggle="dropdown" aria-expanded="false">
                        <span>
                            <Avatar className="shadow" size="2rem" name={user.displayName} round src={user.photoURL}/>
                        </span>

                    </a>
                    : <GoogleButton onClick={signInWithGoogle} type="light"/>
            }
            <ul className="dropdown-menu dropdown-menu-right my-2"
                aria-labelledby="navbarDropdownMenuLink">
                <li onClick={signOut}><button className="dropdown-item">Sign out</button></li>
            </ul>
        </div>
    );
};

export default AvatarWithDropdown;