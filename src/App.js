import React from 'react';
import Title from "./Title";
import Footer from "./Footer";
import {Link} from "react-router-dom"
import MainBackground from "./MainBackground";
import CardProject from "./CardProject";
import CarouselSlide from "./CarouselSlide";
import frevoPreview from "./images/frevospreview.png";
import bancoPreview from "./images/bancopreview.png";
import resumepreview from "./images/resumepreview.png";


class App extends React.Component {
  render() {
    return(
      <MainBackground>
        <Title>Caio Peres' Projects</Title>
        <CarouselSlide content={4}>
          <a href="https://frevosfermentaria.com.br" target="_blank">
            <CardProject content={{ 
              src: frevoPreview, 
              title: "Frevo's Fermentaria Website", 
              description: "Website created with plain HTML, CSS, JS and Firebase.",
              imageHeight: 170
            }}>
            </CardProject>
          </a>
            <CardProject content={{ 
              src: bancoPreview, 
              title: "Banco de Celulas Website", 
              description: "Website created with plain HTML, CSS, JS and Firebase.",
              imageHeight: 170
            }}>
            </CardProject>
            <CardProject content={{ 
              src: resumepreview, 
              title: "My Resume", 
              description: "Website created with plain HTML and CSS.",
              imageHeight: 170
            }}>
            </CardProject>
            <Link to="/OtherProjects" target="_blank">
              <CardProject content={{ 
                src: frevoPreview, 
                title: "Non-web Projects", 
                description: "C/C++, C#, Java, Android.",
                imageHeight: 170
                }}>
              </CardProject>
            </Link>
        </CarouselSlide>
        <Footer>This website was made using React, and can be seen here: <a href="https://github.com/CaioFPeres/caiofperes.github.io" style={{ textDecoration: "none" }}>Github</a></Footer>
      </MainBackground>
    );
  };
}

export default App;