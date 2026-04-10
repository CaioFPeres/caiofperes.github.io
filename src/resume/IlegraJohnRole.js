import React from 'react';
import "./IlegraDesc.css";

class IlegraJohnRole extends React.Component {

    render() {
        return(
            <div>
                <div className="ilegraLocationAndDate">
                    Indaiatuba, SP
                    <br></br>
                    October 2025 - January 2026
                </div>
                <div className="ilegraDepartment"><b>Software Developer</b> <span style={{color: "white"}}>, John Deere</span></div>
            </div>
        );
    };
}

export default IlegraJohnRole;