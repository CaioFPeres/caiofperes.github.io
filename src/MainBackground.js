import React from 'react';
import "./MainBackground.css"

class MainBackground extends React.Component {
    
    render() {
        return(
            <div className="mainBackground" id="mainBack">
                {this.props.children}
            </div>
        
        );
    };
}

export default MainBackground;