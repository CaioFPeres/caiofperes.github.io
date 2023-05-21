import React from 'react';
import "./LeftColumn.css";

class LeftColumn extends React.Component {
    
    render() {
        return(
            <div className="colunaEsq">
                {this.props.children}
            </div>
        );
    };
}

export default LeftColumn;