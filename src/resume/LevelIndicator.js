import React from 'react';
import "./LevelIndicator.css"

class LevelIndicator extends React.Component {
    
    render() {
    
    if(this.props.filled){
        return(
            <div class="Level"></div>
        );
    }
    else{
        return(
            <div class="blankLevel"></div>
        );
    }
    };
}

export default LevelIndicator;