import React from 'react';
import "./Education.css"

class Education extends React.Component {

    render() {
        return(
            <div>
                <div className="Edu"><b>Bachelor of Computer Science</b></div>
                <div className="graduation">Sorocaba, SP <br></br> March 2019 - September 2023</div>
                <div className="ufscar"><i>Universidade Federal de São Carlos</i></div>
            </div>
        );
    };
}

export default Education;