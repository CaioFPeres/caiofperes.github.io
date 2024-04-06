import React from 'react';
import logo from "./samsung/BlackSamsungLogo.svg";
import "./SamsungLogo.css";

class SamsungLogo extends React.Component {

    render() {
        return(
            <div>
                <img className="SamsungLogo" src = {logo} alt="samsung"/>
            </div>
            
        );
    };
}

export default SamsungLogo;