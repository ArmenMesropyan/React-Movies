import React from 'react';
import './Spinner.css';

const Spinner = ({className}) => {
    return (
        <div className={`${className} lds-roller`}><div></div><div></div><div></div><div></div></div>
    )
}

export default Spinner;