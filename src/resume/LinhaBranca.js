import React from 'react';

class LinhaBranca extends React.Component {
    
    style = {
        position: "relative",
        backgroundColor: "#d8d8d8",
        marginLeft: "25px",
        marginRight: "25px",
        width: "auto",
        height: "5px",
        zIndex: "1",
    }
    
    render() {
        return(
            <div className="linhaBranca" style = {this.style}>
            </div>
        );
    };
}

export default LinhaBranca;