import React from 'react';
import './welcome-page.styles.scss';
import GoogleButton from "react-google-button";
import BACKGROUND from '../../imgs/homebg3.jpg'
import {ReactComponent as Logo} from "bootstrap-icons/icons/card-list.svg";

const WelcomePage = () => {
    return (
        <>
            <div className="welcome-page-container grayscale"
                 style={{position: "absolute", backgroundImage: `url(${BACKGROUND})`}}/>
            <div className="welcome-page-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-5 mx-auto d-flex flex-column">
                            <div className="welcome-modal shadow">
                                <div className="card-body">
                                    <form className="form-signin">
                                        <div className="row "><Logo className="col" height={"4rem"} width={"4rem"}
                                                                    style={{color: "#333"}}/></div>
                                        <h5 className="text-center" style={{color: "#333"}}>Sign in to ToDo-est</h5>
                                        <hr className="my-4"/>

                                        <div className="form-label-group">
                                            <label htmlFor="inputEmail" className="text-sm-left">Email address</label>
                                            <input type="email" id="inputEmail" className="form-control"
                                                   required autoFocus/>
                                        </div>
                                        <br className="my-4"/>

                                        <div className="form-label-group">
                                            <label htmlFor="inputPassword">Password</label>
                                            <input type="password" id="inputPassword" className="form-control"
                                                   required/>
                                        </div>
                                        <br className="my-4"/>

                                        <button className="btn btn-primary btn-block"
                                                type="submit">Sign in
                                        </button>
                                        <hr className="my-4"/>
                                        <GoogleButton/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default WelcomePage;