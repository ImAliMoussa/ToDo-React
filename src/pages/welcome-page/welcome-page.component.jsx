import React from 'react';
import FormWithLogo from "../../components/form-with-logo/form-with-logo.component";
import FadedDiv from "../../components/page-faded-centered-div/page-faded-centered-div.component";
import {Link} from "react-router-dom";

const WelcomePage = () => {
    const pageContent = <>
        <div className="d-flex">
            <Link to="/signin" className="btn btn-block btn-lg btn-dark d-block">
               Sign In
            </Link>
        </div>
        <br/>
        <div className="d-flex">
            <Link to="/signup" className="btn btn-block btn-lg btn-dark d-block">
                Sign Up
            </Link>
        </div>
    </>;

    const content = <FormWithLogo title="Welcome to Todo-est" children={pageContent}/>;

    return (
        <FadedDiv children={content}/>
    );
};

export default WelcomePage;