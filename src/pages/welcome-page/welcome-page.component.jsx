import React from 'react';
import FormWithLogo from "../../components/form-with-logo/form-with-logo.component";
import FadedDiv from "../../components/page-faded-centered-div/page-faded-centered-div.component";

const WelcomePage = () => {
    const handleClick = (e) => {
        const {name} = e.target;
        console.log({name})
    };

    const pageContent = <>
        <div className="d-flex">
            <button onClick={handleClick} name="signIn"
                    className="btn btn-block btn-lg btn-dark d-block mx-auto">Sign In
            </button>
        </div>
        <br />
        <div className="d-flex">
            <button onClick={handleClick} name="signUp"
                    className="btn btn-block btn-lg btn-dark d-block mx-auto">Sign Up
            </button>
        </div>
    </>;

    const content = <FormWithLogo title="Welcome to Todo-est" children={pageContent} />;

    return (
        <FadedDiv children={content} />
    );
};

export default WelcomePage;