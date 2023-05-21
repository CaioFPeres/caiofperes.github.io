import React from 'react';

class BlockDiv extends React.Component {

    style = {
        position: "relative",
        display: "inline-block",
        verticalAlign: "top",
        marginLeft: this.props.marginLeft || "auto",
        marginRight: this.props.marginRight || "auto",
        height: "auto",
        width: this.props.width || "auto",
    }

    render() {
        return(
            <div className="BlockDiv" style = {this.style}>
                {this.props.children}
            </div>
        );
    };
}

export default BlockDiv;