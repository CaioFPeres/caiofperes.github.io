import React from 'react';
import "./Skill.css"

class Skill extends React.Component {
    
    render() {
        return(
            <div className="Skill">
                {this.props.children}
            </div>
        );
    };
}

export default Skill;