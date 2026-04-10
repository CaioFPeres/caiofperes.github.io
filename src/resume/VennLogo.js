import React from 'react';
import logo from "./venn/VennLogo.svg";
import "./VennLogo.css";

class VennLogo extends React.Component {

    render() {
        return(
            <div>
                <img className="VennLogo" src = {logo} alt="Samsung"/>
            </div>
            
        );
    };
}

export default VennLogo;