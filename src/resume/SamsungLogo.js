import React from 'react';
import logo from "./samsung/BlackSamsungLogo.svg";
import "./SamsungLogo.css";

class SamsungLogo extends React.Component {

    render() {
        return(
            <div>
                <img className="SamsungLogo" src = {logo} alt="samsung"/>
                <div className="SamsungLocationAndDate">
                    Campinas, SP
                    <br></br>
                    March 2022 - September 2023 
                </div>
                <div className="SamsungDepartment"><b>Security Researcher and Developer, Intern</b></div>
            </div>
            
        );
    };
}

export default SamsungLogo;