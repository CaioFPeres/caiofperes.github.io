import React from 'react';
import CardProject from "./CardProject"
import frevoPreview from "./images/frevospreview.png";
import bancoPreview from "./images/bancopreview.png";
import resumepreview from "./images/resumepreview.png";
import authExample from "./images/authExamplepreview.png";
import languagesPreview from "./images/languagespreview.jpg";
import Background from "./Map/Background";


class Map extends React.Component {

	constructor(props){
		super(props);

		this.marginTop = "40vh";
		this.marginLeft = "10vw";

		this.state = {};
	}

	vh(percentage) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (percentage * h) / 100;
	}
	  
	vw(percentage) {
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		return (percentage * w) / 100;
	}

	render() {
		return(
			<Background>
				<CardProject content={{
					src: frevoPreview, 
					title: "Frevo's Fermentaria Website",
					id: "card1",
					description: "Website created with plain HTML, CSS, JS and Firebase.",
					app: "https://frevosfermentaria.com.br",
					code: "https://github.com/CaioFPeres/FrevosFermentariaWebpage",
					imageHeight: 170,
					marginTop: this.marginTop,
					marginLeft: "60vh"
				}}>
				</CardProject>
				<CardProject content={{
					src: bancoPreview, 
					title: "Banco de Celulas Website", 
					id: "card2",
					description: "Management system created with plain HTML, CSS, JS and Firebase.",
					app: "https://bancocelulas.web.app",
					code: "https://github.com/CaioFPeres/BancoDeCelulas",
					imageHeight: 170,
					marginTop: this.marginTop,
					marginLeft: this.marginLeft
				}}>
				</CardProject>
				<CardProject content={{ 
					src: authExample, 
					title: "Auth Example",
					id: "card3",
					description: "Full client and server application, created using Node, Typescript, React, Mongo, etc.",
					code: "https://github.com/CaioFPeres/AuthExample",
					imageHeight: 170,
					marginTop: this.marginTop,
					marginLeft: this.marginLeft
				}}>
				</CardProject>
				<CardProject content={{ 
					src: resumepreview, 
					title: "My Full Resume",
					id: "card4",
					description: "Website created with plain HTML and CSS.",
					app: "Resume",
					imageHeight: 170,
					marginTop: this.marginTop,
					marginLeft: this.marginLeft
				}}>
				</CardProject>
				<CardProject content={{
					src: languagesPreview, 
					title: "Non-web Projects",
					id: "card5",
					description: "C/C++, C#, Java, Android.",
					app: "OtherProjects",
					imageHeight: 170,
					marginTop: this.marginTop,
					marginLeft: this.marginLeft
				}}>
				</CardProject>
			</Background>
		);
	};
}

export default Map;