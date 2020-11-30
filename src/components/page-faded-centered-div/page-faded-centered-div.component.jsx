import React from 'react';
import './page-faded-centered-div.styles.scss';
import BACKGROUND from '../../imgs/homebg3.jpg'
import {ReactComponent as Logo} from "bootstrap-icons/icons/card-list.svg";

const FadedDiv = (props) => {
    const {title, children, onSubmit} = props;
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
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
                                    <form className="form-signin" onSubmit={onFormSubmit}>
                                        <div className="row "><Logo className="col" height={"4rem"} width={"4rem"}
                                        /></div>
                                        <h5 className="text-center">{title}</h5>
                                        <hr className="my-4"/>
                                        {
                                            children
                                        }
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

export default FadedDiv;