import React from 'react';

class Description extends React.Component {

    style = {
        textAlign: "justify",
        fontSize: this.props.fontSize || "15px",
        position: "relative",
        marginTop: "10px",
        marginBottom: this.props.marginBottom || "10px",
        marginLeft: "35px",
        marginRight: "10px",
        paddingRight: "25px",
        fontFamily: "Amiko",
        width: "auto",
    }

    render() {
        return(
            <div className="Description" style = {this.style}>
                {this.props.children}
            </div>
        );
    };
}

export default Description;