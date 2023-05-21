import React from 'react';

class SectionDiv extends React.Component {

    style = {
        position: "relative",
        display: "block",
        textAlign: "right",
        marginTop: this.props.marginTop,
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto",
        width: "auto",
    }

    render() {
        return(
            <div className="SectionDiv" style = {this.style}>
                {this.props.children}
            </div>
        );
    };
}

export default SectionDiv;