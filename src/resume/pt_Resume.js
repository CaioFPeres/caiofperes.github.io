import React from 'react';
import Background from "./Background"
import BlockDiv from "./BlockDiv"
import FolhaFrente from './FolhaFrente';
import FaixaCinza from './FaixaCinza';
import PersonalInfo from './PersonalInfo';
import InternBackground from './InternBackground';
import LinhaBranca from './LinhaBranca';
import Description from './Description';
import Education from './Education';
import Hobbies from "./Hobbies"
import LeftColumn from './LeftColumn';
import LinhaCinza from './LinhaCinza';
import LeftSection from './LeftSection';
import SectionDiv from './SectionDiv';
import SamsungLogo from './SamsungLogo';
import UNESPLogo from './UNESPLogo';
import PersonalExperience from './PersonalExperience';
import Skill from "./Skill"
import BriefNote from "./BriefNote"

class Resume extends React.Component {
    
    render() {
        return(
            <Background>

                <FolhaFrente>

                    <LeftColumn>

                        <SectionDiv marginTop={228}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Perfil</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={131}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Experiência</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={496}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Educação</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={64}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection marginRight="2px" fontSize="17px">Habilidades Técnicas</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={197}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Hobbies</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={70}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection marginBottom = "60px">Conquistas</LeftSection>
                        </SectionDiv>

                    </LeftColumn>

                    <BlockDiv width = "900px">

                        <FaixaCinza>
                            <PersonalInfo></PersonalInfo>
                        </FaixaCinza>

                        <InternBackground>

                            <LinhaBranca></LinhaBranca>
                            <Description>
                            Interessado em contribuir com a indústria de tecnologia por meio do trabalho e comprometimento com a qualidade. Indivíduo motivado, com forte ética de trabalho e capacidade de trabalhar de forma independente. 
                            Possui experiência diversificada em várias áreas de desenvolvimento de software. Com um grande interesse e curiosidade por tecnologia, se envolve na execução de projetos pessoais que oferecem oportunidades de aprendizado e crescimento, mesmo diante de desafios. 
                            Explorar e entender o processo envolvido em abstrações de alto nível e implementações de baixo nível é altamente gratificante, e projetos pessoais servem como um meio excepcional para alcançar esse objetivo. 
                            Além da expertise técnica, possui fortes habilidades de organização e colaboração em equipe, bem como habilidades sólidas de comunicação e escrita, possibilitando a comunicação efetiva de ideias complexas tanto para indivíduos técnicos quanto não técnicos. 
                            Seja colaborando com equipes diversas ou criando documentação técnica ou acadêmica, demonstra consistentemente a capacidade de articular conceitos com clareza e precisão.
                            </Description>
                            <LinhaBranca></LinhaBranca>
                            <Description>
                                <SamsungLogo></SamsungLogo>
                                Trabalhar no Instituto de Pesquisa e Desenvolvimento da Samsung proporcionou oportunidades de experimentar as diferentes etapas do ciclo de desenvolvimento para tecnologias de ponta, desde a conceitualização e prova de conceito de alto nível, até a implementação final em projetos muito interessantes e inovadores que produziriam software em áreas como Pesquisa em Biometria, desenvolvimento Windows, desenvolvimento Android, desenvolvimento de dispositivos embarcados, desenvolvimento UEFI e muito mais. <br></br>
                                Um dos destaques deste estágio foi a participação em um projeto de pesquisa no campo da biometria. Esse projeto envolveu o pipeline completo de aprendizado de máquina, que inclui coleta de dados, pré-processamento de dados, extração de features, treinamento e análise de modelos, utilizando ferramentas como pandas, scikit-learn, numpy, seaborn, dtw-python e muitas outras. Essa experiência não apenas contribuiu para expandir meu conhecimento de técnicas nessa área, mas também me permitiu auxiliar na elaboração de um artigo acadêmico destinado à submissão a uma conferência internacional, bem como no desenvolvimento de uma patente.

                                <UNESPLogo></UNESPLogo>
                                Desenvolvi um sistema de gerenciamento web completo utilizando o Firebase para o Departamento de Pesquisa de Células da Universidade UNESP, que tinha como objetivo organizar de forma eficiente células humanas e animais em tanques de nitrogênio. Utilizei HTML, CSS e JavaScript, juntamente com os serviços essenciais do Firebase, incluindo Firebase Realtime Database, Firebase Authentication, Firebase Storage e Firebase Hosting. O sistema foi projetado para atender às necessidades dos pesquisadores por meio de um mecanismo de busca com várias opções, além de ser compatível com dispositivos móveis e amigável ao usuário. A introdução dessa solução digital melhorou significativamente a eficiência e a organização em comparação com a abordagem não digital anterior.

                                <PersonalExperience></PersonalExperience>
                                Desenvolvi um website para promover e gerenciar meu próprio projeto de hobby de fabricação de hidromel, juntamente com um aplicativo Android para configuração de temperatura e um dispositivo ESP8266 para medir e controlar a temperatura de uma geladeira. O website foi criado utilizando HTML, CSS e JavaScript, e a temperatura medida foi inserida no Firebase Database, utilizando esses dados para plotar um gráfico em tempo real para uma melhor visualização.
                                <br></br>
                                Desenvolvi várias aplicações Web(HTML, CSS, Javascript, React), Machine Learning, Java, Android, Windows, C/C++ e C#.

                            </Description>
                            <LinhaBranca></LinhaBranca>
                            <Education></Education>
                            <LinhaBranca></LinhaBranca>

                            <Description>
                                <BriefNote>
                                    Altamente proficiente em todas as habilidades apresentadas:
                                </BriefNote>

                                <Skill>
                                    <b>Desenvolvimento de Software Geral:</b> Windows(Win32, UWP, .NET), Android(Java), Java, Python, UEFI(EDKII), C, C++, C#
                                </Skill>

                                <Skill>
                                    <b>Desenvolvimento Web:</b> HTML, CSS, Javascript, Typescript, React, NodeJS
                                </Skill>

                                <Skill>
                                    <b>Ciencia de Dados & Aprendizado de Máquina:</b> Pandas, Scikit-learn, Numpy, dtw-python, Dlib(Python/C++), OpenCV(Python/C++)
                                </Skill>

                                <Skill>
                                    <b>Bancos de Dados:</b> MySQL, Postgres, Firebase Realtime Database, MongoDB
                                </Skill>

                                <Skill>
                                    <b>Sistemas Operacionais:</b> Windows Systems, Linux Systems
                                </Skill>

                                <Skill>
                                    <b>Methodologias de Desenvolvimento ágil:</b> Scrum, Kanban
                                </Skill>

                                <Skill>
                                    <b>Eletronica Digital:</b> Arduino
                                </Skill>

                                <Skill>
                                    <b>Ferramentas diversas:</b> Git, Docker, Visual Studio, Visual Studio Code, Virtual Machines(VirtualBox and others)
                                </Skill>

                                <Skill>
                                    <b>Linguas fluentes:</b> Portuguese, English
                                </Skill>

                            </Description>
                        
                        {/*

                            <BlockDiv marginLeft="80px" marginRight="200px">
                                <SkillWithIndicator skillName="Web Development" marginLeft="15px">
                                    <SubSkillWithIndicator subSkillName={"HTML"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"CSS"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Javascript"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Typescript"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"React"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"NodeJS"} level={5}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                                <SkillWithIndicator skillName="Systems" marginLeft = "50px">
                                    <SubSkillWithIndicator subSkillName={"Windows Systems"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Linux Systems"} level={4}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Docker"} level={5}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                                <SkillWithIndicator skillName="IT Methodologies" marginLeft = "20px">
                                    <SubSkillWithIndicator subSkillName={"Scrum"} level={4}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Kanban"} level={5}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                                <SkillWithIndicator skillName="Digital Eletronics" marginLeft = "20px">
                                    <SubSkillWithIndicator subSkillName={"Arduino"} level={5}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                                <SkillWithIndicator skillName="Tools" marginLeft = "60px">
                                    <SubSkillWithIndicator subSkillName={"Git"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Visual Studio"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Visual Studio Code"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Virtual Machines(VirtualBox and others)"} level={5}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                            </BlockDiv>

                            <BlockDiv>
                                <SkillWithIndicator skillName="General Software Development" marginLeft="-20px">
                                    <SubSkillWithIndicator subSkillName={"Windows(Win32, UWP, .NET)"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Android(Java)"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Java"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"C#"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Python"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"C"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"C++"} level={4}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                                <SkillWithIndicator skillName="Machine Learning" marginLeft="20px">
                                    <SubSkillWithIndicator subSkillName={"Pandas"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Scikit-learn"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Numpy"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Dlib(C++)"} level={4}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"OpenCV(Python/C++)"} level={4}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                                <SkillWithIndicator skillName="Databases" marginLeft = "50px">
                                    <SubSkillWithIndicator subSkillName={"MySQL"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Postgres"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"Firebase Realtime Database"} level={5}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"MongoDB"} level={5}></SubSkillWithIndicator>
                                </SkillWithIndicator>

                                <SkillWithIndicator skillName="Languages" marginLeft = "48px">
                                    <SubSkillWithIndicator subSkillName={"Portuguese"}></SubSkillWithIndicator>
                                    <SubSkillWithIndicator subSkillName={"English"} level={5}></SubSkillWithIndicator>
                                </SkillWithIndicator>
                            </BlockDiv>

                            */}
                        
                            <LinhaBranca></LinhaBranca>
                            <Hobbies></Hobbies>
                            <LinhaBranca></LinhaBranca>
                            <Description fontSize="20px" marginBottom="35.66px">
                                TOEFL ITP B2
                            </Description>

                        </InternBackground>
                    </BlockDiv>
                </FolhaFrente>
            </Background>
        );
    };
}

export default Resume;