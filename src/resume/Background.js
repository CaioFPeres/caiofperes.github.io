import React from 'react';
import "./Background.css"

class Background extends React.Component {
    
    render() {
        return(
            <div className="background">
                {this.props.children}
            </div>
        );
    };
}

export default Background;