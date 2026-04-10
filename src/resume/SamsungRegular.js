import React from 'react';
import "./SamsungDesc.css";

class SamsungRegular extends React.Component {

    render() {
        return(
            <div>
                <div className="SamsungLocationAndDate">
                    Campinas, SP
                    <br></br>
                    October 2023 - October 2025
                </div>
                <div className="SamsungDepartment"><b>Software Developer and Researcher</b> <span style={{color: "white"}}>, Samsung Electronics</span></div>
            </div>
        );
    };
}

export default SamsungRegular;