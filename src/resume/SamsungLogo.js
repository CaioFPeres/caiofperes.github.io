import React from 'react';
import logo from "./samsung/BlackSamsungLogo.svg";
import "./SamsungLogo.css";

class SamsungLogo extends React.Component {

    render() {
        return(
            <div>
                <img class="SamsungLogo" src = {logo} alt="samsung"/>
                <div class="SamsungLocationAndDate">
                    Campinas, SP
                    <br></br>
                    March 2022 - September 2023 
                </div>
                <div class="SamsungDepartment"><b>Security Researcher and Developer Intern</b></div>
            </div>
            
        );
    };
}

export default SamsungLogo;