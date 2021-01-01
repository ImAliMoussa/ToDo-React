import React from 'react';
import './page-faded-centered-div.styles.scss';

const FadedDiv = ({children}) => {
    return (
        <>
            <div className="welcome-page-container"
                 style={{
                     position: "absolute",

                     // got the linear gradient off the top of this website : https://css-tricks.com/background-image-shapes/
                     // css-tricks.com <3 <3
                     backgroundImage: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)",

                     backgroundPosition: "center",
                     backgroundAttachment: "fixed"
                 }}/>
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