import React from 'react';
import "./SkillWithIndicator.css";

class SkillWithIndicator extends React.Component {
    
    SkillNameStyle = {
        marginLeft: this.props.marginLeft,
        marginBottom: "10px",
    }
    
    render() {
        return(
            <div className="SkillWithIndicator">
                <div className="SkillName" style = {this.SkillNameStyle}>
                    {<b>{this.props.skillName}</b>}
                </div>

                {this.props.children}
            </div>
        );
    };
}

export default SkillWithIndicator;