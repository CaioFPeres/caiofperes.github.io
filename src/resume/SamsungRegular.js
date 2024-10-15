import React from 'react';
import "./SamsungDesc.css";

class SamsungLogo extends React.Component {

    render() {
        return(
            <div>
                <div className="SamsungLocationAndDate">
                    Campinas, SP
                    <br></br>
                    October 2023 - Present
                </div>
                <div className="SamsungDepartment"><b>Security Researcher and Developer</b> <span style={{color: "white"}}>, Samsung Electronics</span></div>
            </div>
        );
    };
}

export default SamsungLogo;