import React from 'react';
import "./Bullet.css";

class Bullet extends React.Component {

    render() {

        if(this.props.ul){
            return(
                <ul className="BulletUl">
                    {this.props.children}
                </ul>
            );
        }
        else{
            return(
                <li className="Bullet" id="bullet">
                    <div className="BulletDiv">{this.props.children}</div>
                </li>
            );
        }
    };
}

export default Bullet;