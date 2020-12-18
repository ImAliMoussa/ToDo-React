import React from "react";
import "./navbar.styles.scss";
import {ReactComponent as Logo} from "bootstrap-icons/icons/check2-square.svg";
import AvatarWithDropdown from "../navbar-avatar-with-dropdown/navbar-avatar-with-dropdown.component";
import {auth, firestore} from "../../firebase/firebaseinit";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: ""
        }
    }

    componentDidMount() {
        const user = auth.currentUser;
        if (auth.currentUser.displayName) { // google sign in
            this.setState({displayName: auth.currentUser.displayName + "'s "});
        } else { // regular sign up fetch name from database
            firestore.doc(`users/${user.uid}`).get().then((doc) => {
                if (doc.exists) {
                    this.setState({displayName: doc.data().fullName + "'s "});
                }
            });
        }
    }

    render() {
        const {displayName} = this.state;
        return (
            <nav className="navbar navbar-light bg-light p-0 shadow-sm small-outline">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <Logo className="icon d-inline-block mr-1"/>
                        <span className="text">{displayName + 'ToDos'}</span>
                    </a>
                    <AvatarWithDropdown displayName={displayName}/>
                </div>
            </nav>
        );
    }
}


export default Navbar;