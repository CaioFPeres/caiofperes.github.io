import React from 'react';
import "./Title.css";

class Title extends React.Component {
    
    render() {
        return(
            <div className="Title">
                {this.props.children}
            </div>
        
        );
    };
}

export default Title;