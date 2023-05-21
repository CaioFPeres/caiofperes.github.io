import React from 'react';
import "./LinhaCinza.css";

class LinhaCinza extends React.Component {
    
    render() {
        return(
            <div className="LinhaCinza">
                {this.props.children}
            </div>
        );
    };
}

export default LinhaCinza;