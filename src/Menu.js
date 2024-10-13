import React from 'react';
import "./Menu.css"

class Menu extends React.Component{

    render(){
        return(
            <div className="Menu" id="menu">
                <a href={this.props.app} id="app" className="MenuItem">App</a>
                <div className="divisor"></div>
                <a href={this.props.code} id="code" style={{paddingLeft: 4, marginLeft: 7, paddingRight: 23}} className="MenuItem">Code</a>
            </div>
        );
    }

}

export default Menu;