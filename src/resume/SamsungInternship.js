import React from 'react';
import "./SamsungDesc.css";

class SamsungInternship extends React.Component {

    render() {
        return(
            <div style={{marginTop: "35px"}}>
                <div className="SamsungLocationAndDate" style={{marginTop: "-20px"}}>
                    Campinas, SP
                    <br></br>
                    March 2022 - September 2023
                </div>
                <div className="SamsungDepartment"><b>Software Developer and Researcher, Intern</b> <span style={{color: "white"}}>, Samsung Electronics</span></div>
            </div>
            
        );
    };
}

export default SamsungInternship;