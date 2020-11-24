import React from 'react';
import './navbar-avatar-with-dropdown.styles.scss';
import Avatar from "react-avatar";
import GoogleButton from "react-google-button";
import {signInWithGoogle, signOut} from "../../firebase/firebaseAuthUtils";

const AvatarWithDropdown = ({user}) => {
    return (
        <div className="dropdown pr-0 py-0">
            {
                user ?
                    <a className="nav-link" href="#" id="navbarDropdownMenuLink"
                       role="button" data-toggle="dropdown" aria-expanded="false">
                        <span>
                            <Avatar className="shadow" size="2rem" name={user.displayName} round src={user.photoURL}/>
                        </span>

                    </a>
                    : <GoogleButton onClick={signInWithGoogle} type="light"/>
            }
            <ul className="dropdown-menu dropdown-menu-right my-2"
                aria-labelledby="navbarDropdownMenuLink">
                <li onClick={signOut}><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    );
};

export default AvatarWithDropdown;