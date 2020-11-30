import React from 'react';
import './signup-page.styles.scss';
import FadedDiv from "../../components/page-faded-centered-div/page-faded-centered-div.component";
import {signUpWithEmail} from "../../firebase/firebaseAuthUtils";

class SignUpPage extends React.Component {
    // sign in page content, added as props.children to FadedDiv component
    state = {
        fullName: "",
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
        const {fullName, email, password} = this.state;
        const content =
            <>
                <div className="form-label-group">
                    <label htmlFor="inputName" className="text-sm-left">Name</label>
                    <input type="text" id="inputName" className="form-control" name="fullName"
                           required autoFocus value={fullName} onChange={this.handleInputChange}/>
                </div>
                <br className="my-4"/>

                <div className="form-label-group">
                    <label htmlFor="inputEmail" className="text-sm-left">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" name="email"
                           required value={email} onChange={this.handleInputChange}/>
                </div>
                <br className="my-4"/>

                <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="password"
                           required value={password} onChange={this.handleInputChange}/>
                </div>
                <br/>
                <div className="d-flex">
                    <button type="submit" className="btn btn-block btn-lg btn-dark d-block mx-auto">Sign Up</button>
                </div>
            </>;

        return (
            <FadedDiv title="Sign Up" children={content} onSubmit={() => signUpWithEmail(fullName, email, password)}/>
        );
    }

}

export default SignUpPage;