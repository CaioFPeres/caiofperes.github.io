import React from 'react';

class LeftSection extends React.Component {

    style = {
        position: "relative",
        display: "block",
        marginRight: "6px",
        marginTop: "4px",
        marginBottom: this.props.marginBottom || "34px",
        fontSize: "19px",
        fontFamily: "Amiko",
        color: "white",
    }

    render() {
        return(
            <div className="LeftSection" style = {this.style}>
                {this.props.children}
            </div>
        );
    };
}

export default LeftSection;