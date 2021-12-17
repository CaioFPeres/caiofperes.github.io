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
            <CardProject content={{ 
              src: frevoPreview, 
              title: "Frevo's Fermentaria Website", 
              description: "Website created with plain HTML, CSS, JS and Firebase.",
              href: "http://frevosfermentaria.com.br",
              imageHeight: 170
            }}>
            </CardProject>
            <CardProject content={{ 
              src: bancoPreview, 
              title: "Banco de Celulas Website", 
              description: "Website created with plain HTML, CSS, JS and Firebase.",
              href: "http://bancocelulas.web.app",
              imageHeight: 170
            }}>
            </CardProject>
            <CardProject content={{ 
              src: resumepreview, 
              title: "My Resume", 
              description: "Website created with plain HTML and CSS.",
              href: "Resume",
              imageHeight: 170
            }}>
            </CardProject>
            <CardProject content={{ 
              src: frevoPreview, 
              title: "Non-web Projects", 
              description: "C/C++, C#, Java, Android.",
              href: "OtherProjects",
              imageHeight: 170
              }}>
            </CardProject>
        </CarouselSlide>
        <Footer>This website was made using React, and can be seen here: <Link to="http://google.com" style={{ textDecoration: "none" }}>Github</Link></Footer>
      </MainBackground>
    );
  };
}

export default App;