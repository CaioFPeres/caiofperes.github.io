import React from 'react';
import hobbies from "./hobbies.jpg"
import "./Hobbies.css"

class Description extends React.Component {

    render() {
        return(
            <img alt="hobbies" src={hobbies} className="hobbiesIMG"/>
        );
    };
}

export default Description;