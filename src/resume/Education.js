import React from 'react';
import "./Education.css"

class Education extends React.Component {

    render() {
        return(
            <div>
                <div className="Edu"><b>Undergraduate Student in Computer Science</b></div>
                <div className="graduation">Sorocaba, Brazil <br></br> Expected graduation date: September 2023</div>
                <div className="ufscar"><i>Universidade Federal de São Carlos</i></div>
            </div>
        );
    };
}

export default Education;