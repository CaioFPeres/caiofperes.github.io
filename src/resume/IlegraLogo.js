import React from 'react';
import logo from "./ilegrajohn/ilegra-john.png";
import "./IlegraLogo.css";

class IlegraLogo extends React.Component {

    render() {
        return(
            <div>
                <img className="IlegraLogo" src = {logo} alt="ilegraJohn"/>
            </div>
            
        );
    };
}

export default IlegraLogo;