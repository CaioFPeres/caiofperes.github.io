import React from 'react';
import "./BriefNote.css"

class BriefNote extends React.Component {
    
    render() {
        return(
            <div className="BriefNote">
                {this.props.children}
            </div>
        );
    };
}

export default BriefNote;