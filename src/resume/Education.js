import React from 'react';
import "./Education.css"

class Education extends React.Component {

    render() {
        return(
            <div>
                <div className="Edu"><b>Undergraduate Student in Computer Science</b></div>
                <div className="graduation">Expected graduation date: September 2023</div>
                <div className="ufscar"><i>UFSCar, Sorocaba, Brazil</i></div>
            </div>
        );
    };
}

export default Education;