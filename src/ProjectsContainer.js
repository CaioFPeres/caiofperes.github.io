import React from 'react';
import "./ProjectsContainer.css"


class ProjectsContainer extends React.Component {

    render() {
        return(
            <div className="ProjectsContainer">
                {this.props.children}
            </div>
        );
    };
}

export default ProjectsContainer;