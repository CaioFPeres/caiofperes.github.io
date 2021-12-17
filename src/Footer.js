import React from 'react';
import "./Title.css";

class Footer extends React.Component {    
    render() {
        return(
            <div className="Footer">
                {this.props.children}
            </div>
        
        );
    };
}

export default Footer;