import React from 'react';
import "./SubSkillWithIndicator.css"
import LevelIndicator from "./LevelIndicator"

class SubSkillWithIndicator extends React.Component {

    nativeStyle = {
        float: "right"
    }

    renderingLevels(level){

        if(!level){
            return <div style={this.nativeStyle}><b>Native</b></div>
        }
        
        var levels = [];
        var i;

        for(i = 5 - level; i > 0; i--){
            levels.push(<LevelIndicator filled = {false}></LevelIndicator>)
        }

        for(i = level; i > 0; i--){
            levels.push(<LevelIndicator filled = {true}></LevelIndicator>)
        }

        return levels;

    }
    
    render() {
        return(
            <div className="SubSkillWithIndicator">
                {this.props.subSkillName}
                {this.renderingLevels(this.props.level)}
            </div>
        );
    };
}

export default SubSkillWithIndicator;