import React from 'react';
import './page-faded-centered-div.styles.scss';
import BACKGROUND from '../../imgs/homebg3.jpg'

const FadedDiv = ({children}) => {
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
                                    {
                                        children
                                    }
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