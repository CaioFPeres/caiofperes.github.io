import React from 'react';
import "./Background.css"

class Background extends React.Component {
    
    constructor(props){
		super(props);

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleWindowResize = this.handleWindowResize.bind(this);

		this.scrollDimensions = []
		this.elementTree = [];

		window.onload = () => {
			this.scrollDimensions = [document.getElementById("mapBack").scrollWidth/2, document.getElementById("mapBack").scrollHeight/2];
			document.addEventListener("mousemove", this.handleMouseMove);
			window.addEventListener("resize", this.handleWindowResize);
			// this.GetElementTree()
		}

		this.state = {};
	}

	GetElementTree(){
		let tree = document.getElementById("mapBack").getElementsByTagName("*");
		for(let i = 0; i < tree.length; i++)
			this.elementTree.push(tree[i]);
	}

	handleMouseMove(e){
		window.scrollTo(e.clientX, e.clientY)
	}

	handleWindowResize(e){
		this.scrollDimensions = [document.getElementById("mapBack").scrollWidth/2, document.getElementById("mapBack").scrollHeight/2]
	}

    render() {
        return(
            <div className="mapBackground" id="mapBack">
				{this.props.children}
            </div>
        );
    };
}

export default Background;