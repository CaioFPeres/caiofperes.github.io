import React from 'react';
import "./FaixaCinza.css"

class FaixaCinza extends React.Component {

    render() {
        return(
            <div className="faixaCinza">
                {this.props.children}
            </div>
        );
    };
}

export default FaixaCinza;