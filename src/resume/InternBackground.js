import React from 'react';
import "./InternBackground.css"

class InternBackground extends React.Component {

    render() {
        return(
            <div className="internBackground">
                {this.props.children}
            </div>
        );
    };
}

export default InternBackground;