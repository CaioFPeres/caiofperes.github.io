import React from 'react';
import Title from "./Title";
import Footer from "./Footer";
import MainBackground from "./MainBackground";
import CardProject from "./CardProject";
import CarouselSlide from "./CarouselSlide";
import frevoPreview from "./images/frevospreview.png";
import bancoPreview from "./images/bancopreview.png";
import resumepreview from "./images/resumepreview.png";
import authExample from "./images/authExamplepreview.png";
import languagesPreview from "./images/languagespreview.jpg";


class App extends React.Component {
  render() {
    return(
      <MainBackground>
        <Title>Caio Peres' Projects</Title>
        <CarouselSlide>
          <CardProject content={{ 
            src: frevoPreview, 
            title: "Frevo's Fermentaria Website",
            id: "card1",
            description: "Website created with plain HTML, CSS, JS and Firebase.",
            app: "https://frevosfermentaria.com.br",
            code: "https://github.com/CaioFPeres/FrevosFermentariaWebpage",
            imageHeight: 170
          }}>
          </CardProject>
          <CardProject content={{
            src: bancoPreview, 
            title: "Banco de Celulas Website", 
            id: "card2",
            description: "Management system created with plain HTML, CSS, JS and Firebase.",
            app: "https://bancocelulas.web.app",
            code: "https://github.com/CaioFPeres/BancoDeCelulas",
            imageHeight: 170
          }}>
          </CardProject>
          <CardProject content={{ 
            src: authExample, 
            title: "Auth Example",
            id: "card3",
            description: "Full client and server application, created using Node, Typescript, React, Mongo, etc.",
            code: "https://github.com/CaioFPeres/AuthExample",
            imageHeight: 170
          }}>
          </CardProject>
          <CardProject content={{ 
            src: resumepreview, 
            title: "My Full Resume",
            id: "card4",
            description: "Website created with plain HTML and CSS.",
            app: "Resume",
            imageHeight: 170
          }}>
          </CardProject>
          <CardProject content={{ 
            src: languagesPreview, 
            title: "Non-web Projects",
            id: "card5",
            description: "C/C++, C#, Java, Android.",
            app: "OtherProjects",
            imageHeight: 170
            }}>
          </CardProject>
        </CarouselSlide>
        <Footer>This website was made using React, and can be seen here: <a href="https://github.com/CaioFPeres/caiofperes.github.io" style={{ textDecoration: "none" }}>Github</a></Footer>
      </MainBackground>
    );
  };
}

export default App;