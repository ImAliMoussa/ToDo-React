import React from 'react';
import {ReactComponent as Logo} from "bootstrap-icons/icons/card-list.svg";

const FormWithLogo = ({title, children}) => {
    return (
        <form method="post">
            <div className="row "><Logo className="col" height={"4rem"} width={"4rem"}
            /></div>
            <h5 className="text-center">{title}</h5>
            <hr className="my-4"/>
            {
                children
            }
        </form>
    );
}

export default FormWithLogo;