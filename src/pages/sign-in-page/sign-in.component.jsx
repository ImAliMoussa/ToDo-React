import React from 'react';
import FadedDiv from "../../components/page-faded-centered-div/page-faded-centered-div.component";
import GoogleButton from "react-google-button";
import './sign-in.styles.scss';
import {signInWithEmail, signInWithGoogle} from "../../firebase/firebaseAuthUtils";
import FormWithLogo from "../../components/form-with-logo/form-with-logo.component";

class SignIn extends React.Component {
    SIGN_IN_EMAIL = "SIGN_IN_EMAIL";
    SIGN_IN_GOOGLE = "SIGN_IN_GOOGLE";

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

    handleSubmit = (event, name) => {
        if (name === this.SIGN_IN_EMAIL) {
            const {email, password} = this.state;
            signInWithEmail(email, password);
        } else if (name === this.SIGN_IN_GOOGLE) {
            signInWithGoogle();
        } else console.assert(false);
        event.preventDefault();
    }

    render() {
        const {email, password} = this.state;
        // sign in page content, added as props.children to FadedDiv component
        const signInContent =
            <>
                <div className="form-label-group">
                    <label htmlFor="inputEmail" className="text-sm-left">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" name="email" value={email}
                           onChange={this.handleInputChange}
                           required autoFocus/>
                </div>
                <br/>

                <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="password" value={password}
                           onChange={this.handleInputChange}
                           required/>
                </div>
                <br/>
                <div className="d-flex">
                    <button onClick={(e) => this.handleSubmit(e, this.SIGN_IN_EMAIL)}
                            className="btn btn-block btn-lg btn-dark d-block mx-auto">Sign In
                    </button>
                </div>
                <hr className="my-3"/>
                <div className="m-2"><p className="text-muted fine-print text-secondary text-center m-0">or</p></div>
                <div><GoogleButton onClick={(e) => this.handleSubmit(e, this.SIGN_IN_GOOGLE)}
                                   className="w-100 bg-white text-dark"/></div>
            </>;

        const content = <FormWithLogo title="Sign In" children={signInContent}/>

        return (
            <FadedDiv className="mx-auto" title="Sign In" children={content}
                      onSubmit={this.handleSubmit}/>
        );
    }
};

export default SignIn;