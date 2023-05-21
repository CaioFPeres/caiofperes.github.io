import React from 'react';
import hobbiespreview from "./resume/hobbies.jpg"
import "./Resume.css"

class Resume extends React.Component {
    
    render() {
        return(

            <div className="background">

                <div className="folhaFrente" id="folhaFrente">

                    <div className="faixaCinza">

                        <div className="nome">Caio Peres</div>

                        <div className="developer">Software Engineer</div>

                        <div className="info">

                            <div className="location"> <b>Location:</b> Botucatu, São Paulo, Brazil</div>
                        
                            <div className="phone" style={{ marginBottom: "2px"}}><b>Phone Number: </b>5514998708771</div>

                            <div className="email" style={{ marginBottom: "2px"}}><b>Email: </b>caiofperes@hotmail.com</div>

                            <div className="linkedin" style={{ marginBottom: "2px"}}> <b>Linkedin: </b>https://linkedin.com/in/caiofperes/</div>

                            <div className="web"><b>Portifolio: </b>https://caiofperes.github.io/</div>

                            <div className="github"> <b>Github: </b>https://github.com/CaioFPeres</div>

                        </div>

                    </div>


                    <div className="internBackground">

                        <div className="linhaBranca1"></div>

                        <div className="descProfile">
                                
                            Possess experience in Web Development, Windows Development and Android Development.

                            Eager to bring value to industries of technology through hard work and commitment to quality.

                            Motivated individual with strong work ethic and ability to work independently. Strong organizational and team collaboration skills with high interest in improving processes.

                        </div>

                        <div className="linhaBranca2"></div>

                        
                        <div className="descExperience">
                            
                            Developed a complete management web system using Firebase for UNESP University in Botucatu, São Paulo, which aimed to organize human and animal cells in nitrogen tanks. The system was designed to attend users needs under a multiple option search engine, while being mobile and user friendly.
                            Developed own website to promote and manage my brewing hobby project, along with an Android Application for temperature monitoring and an Arduino device to control a refrigerator temperature. The measured temperature could be seen on the website in a monitoring webpage which kept record of the past temperatures using Firebase in order to build a chart.
                            Also developed several Java, Web (HTML, CSS and Javascript), C/C++ and C# applications.

                        </div>

                        <div className="linhaBranca3"></div>

                        <div className="descEdu"><b>Undergraduate Student in Computer Science</b></div>
                        <div className="ufscar"><i>UFSCAR, Sorocaba, Brazil</i></div>




                        <div className="linhaBranca4"></div>

                        <div className="webDev"><b>Web Development</b>

                            <div className="webSkills">
                                <div className="html">HTML
                                    <div className="bolinhaHTML"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                </div>

                                <div className="css">CSS
                                    <div className="bolinhaCSS"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                </div>

                                <div className="javascript">Javascript
                                    <div className="bolinhaJS"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                </div>

                                <div className="typescript">Typescript
                                    <div className="bolinhaTS"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                </div>

                                <div className="react">React
                                    <div className="bolinhaReact"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="node">NodeJS
                                    <div className="bolinhaNode"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                            </div>

                        </div>



                        <div className="sysNet"><b>Systems And VMs</b>

                            <div className="sysSkills">
                                <div className="winSys">Windows Systems
                                    <div className="bolinhaWin"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                </div>
                                
                                <div className="linuxSys">Linux Systems
                                    <div className="bolinhaLinux"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="docker">Docker
                                    <div className="bolinhaDocker"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                </div>

                            </div>

                        </div>



                        <div className="method"><b>IT Methodologies</b>

                            <div className="methodSkills">
                                <div className="scrum">Scrum
                                    <div className="bolinhaScrum"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                            </div>

                        </div>



                        <div className="softwareDev"><b>Software Development</b>
                            <div className="softwareSkills">
                                <div className="Android">Android
                                    <div className="bolinhaAndroid"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="Java">Java
                                    <div className="bolinhaJava"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="CS">C# .NET
                                    <div className="bolinhaCS"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="python">Python
                                    <div className="bolinhaPy"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="C">C
                                    <div className="bolinhaC"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="CPP">C++
                                    <div className="bolinhaCPP"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                            </div>

                        </div>




                        <div className="databases"><b>Databases</b>
                            <div className="dbSkills">

                                <div className="mySQL">MySQL
                                    <div className="bolinhaMySQL"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="postgres">Postgres
                                    <div className="bolinhaPostgres"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="firebase">Firebase
                                    <div className="bolinhaFirebase"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                                <div className="mongo">MongoDB
                                    <div className="bolinhaMongo"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>

                            </div>

                        </div>




                        <div className="languages"><b>Languages</b>
                            <div className="linguas">
                                <div className="portuguese">Portuguese
                                    <div className="bolinhaPortuguese"><b>Native</b></div>
                                </div>

                                <div className="english">English
                                    <div className="bolinhaEnglish"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                </div>
                            </div>
                        </div>


                        <div className="digital"><b>Digital Eletronics</b>

                            <div className="digitalSkills">
                                <div className="arduino">Arduino
                                    <div className="bolinhaArduino"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinha"></div>
                                    <div className="bolinhaVazia"></div>
                                </div>
                            </div>

                        </div>



                        <div className="linhaBranca5"></div>
                        <img alt="hobbies" src={hobbiespreview} className="hobbiesIMG"/>



                        <div className="linhaBranca6"></div>
                        <div className="toefl">TOEFL'S ITP B2</div>

                    </div>


                    <div className="colunaEsq">

                        <div className="linhaCinza1"></div>
                        <div className="profile">Profile</div>


                        <div className="linhaCinza2"></div>
                        <div className="experience">Experience</div>


                        <div className="linhaCinza3"></div>
                        <div className="edu">Education</div>


                        <div className="linhaCinza4"></div>
                        <div className="skills">Skills</div>


                        <div className="linhaCinza5"></div>
                        <div className="hobbies">Hobbies</div>


                        <div className="linhaCinza6"></div>
                        <div className="achievements">Achievements</div>


                    </div>

                </div>
            </div>
        
        );
    };
}

export default Resume;