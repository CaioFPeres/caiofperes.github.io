import React from 'react';
import "./FolhaFrente.css"

class FolhaFrente extends React.Component {
    
    render() {
        return(
            <div className="folhaFrente" id="folhaFrente">
                {this.props.children}
            </div>
        );
    };
}

export default FolhaFrente;