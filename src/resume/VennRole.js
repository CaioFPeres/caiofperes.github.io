import React from 'react';
import "./VennDesc.css";

class VennRole extends React.Component {

    render() {
        return(
            <div>
                <div className="VennLocationAndDate">
                    Remote
                    <br></br>
                    January 2026 - Present
                </div>
                <div className="VennDepartment"><b>Software Developer</b> <span style={{color: "white"}}>, Venn</span></div>
            </div>
        );
    };
}

export default VennRole;