import React from 'react';
import FadedDiv from "../../components/page-faded-centered-div/page-faded-centered-div.component";
import GoogleButton from "react-google-button";
import './sign-in-sign-up.styles.scss';
import {signInWithEmail, signInWithGoogle} from "../../firebase/firebaseAuthUtils";

class SignInSignUp extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {email, password} = this.state;
        // sign in page content, added as props.children to FadedDiv component
        const content =
            <>
                <div className="form-label-group">
                    <label htmlFor="inputEmail" className="text-sm-left">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" name="email" value={email}
                           required autoFocus/>
                </div>
                <br/>

                <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="password" value={password}
                           required/>
                </div>
                <br/>
                <div className="d-flex">
                    <button className="btn btn-block btn-lg btn-dark d-block mx-auto">Sign In</button>
                </div>
                <hr className="my-3"/>
                <div className="m-2"><p className="text-muted fine-print text-secondary text-sm-center m-0">or</p></div>
                <div><GoogleButton className="w-100 bg-white text-dark" onClick={signInWithEmail}/></div>
            </>;

        return (
            <FadedDiv className="mx-auto" title="Sign In" children={content}
                      onSubmit={signInWithEmail(email, password)}/>
        );
    }
};

export default SignInSignUp;