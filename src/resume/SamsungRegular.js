import React from 'react';
import "./SamsungDesc.css";

class SamsungLogo extends React.Component {

    render() {
        return(
            <div>
                <div className="SamsungLocationAndDate">
                    Campinas, SP
                    <br></br>
                    October 2023
                </div>
                <div className="SamsungDepartment"><b>Security Researcher and Developer</b></div>
            </div>
        );
    };
}

export default SamsungLogo;