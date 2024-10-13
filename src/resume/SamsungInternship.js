import React from 'react';
import "./SamsungDesc.css";

class SamsungLogo extends React.Component {

    render() {
        return(
            <div>
                <div className="SamsungLocationAndDate">
                    Campinas, SP
                    <br></br>
                    March 2022 - September 2023
                </div>
                <div className="SamsungDepartment"><b>Security Researcher and Developer, Intern</b> <span style={{color: "white"}}>, Samsung Electronics</span></div>
            </div>
            
        );
    };
}

export default SamsungLogo;