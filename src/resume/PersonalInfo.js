import React from 'react';
import "./PersonalInfo.css"

class PersonalInfo extends React.Component {

    render() {
        return(
            <div className="PersonalInfo">

                <div className="nome">Caio Peres</div>

                <div className="developer">Software Developer & Researcher</div>

                <div className="info">

                    <div className="location"> <b>Localization:</b> Campinas, São Paulo, Brazil</div>

                    <div className="phone" style={{ marginBottom: "2px"}}><b>Phone Number: </b>5514998708771</div>

                    <div className="email" style={{ marginBottom: "2px"}}><b>Email: </b>caiofperes@hotmail.com</div>

                    <div className="linkedin" style={{ marginBottom: "2px"}}> <b>Linkedin: </b>https://linkedin.com/in/caiofperes/</div>

                    <div className="web"><b>Portifolio: </b>https://caiofperes.github.io/</div>

                    <div className="github"> <b>Github: </b>https://github.com/CaioFPeres</div>

                </div>

            </div>
        );
    };
}

export default PersonalInfo;