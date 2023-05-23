import React from 'react';
import logo from "./unesp/Logo_Unesp.svg";
import "./UNESPLogo.css";

class UNESPLogo extends React.Component {

    render() {
        return(
            <div>
                <img class="UNESPLogo" src = {logo} alt="samsung"/>
                <div class="UNESPLocationAndDate">
                    Botucatu, SP
                    <br></br>
                    January 2021 - December 2021 
                </div>
                <div class="UNESPDepartment"><b>Software Engineer Intern</b></div>
            </div>
        );
    };
}

export default UNESPLogo;