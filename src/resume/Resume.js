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
                            <LeftSection>Profile</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={147}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Experience</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={428}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Education</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={64}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Technical Skills</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={196}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Hobbies</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={70}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection marginBottom = "60px">Achievements</LeftSection>
                        </SectionDiv>

                    </LeftColumn>

                    <BlockDiv width = "900px">

                        <FaixaCinza>
                            <PersonalInfo></PersonalInfo>
                        </FaixaCinza>

                        <InternBackground>

                            <LinhaBranca></LinhaBranca>
                            <Description>
                                Eager to bring value to the technology industry through hard work and commitment to quality.
                                Motivated individual with strong work ethic and ability to work independently. <br></br>
                                Possess diverse experience in various areas of software development. With a strong passion and curiosity for technology, truly enjoys executing personal projects that provide opportunities to learn and grow, even in the face of challenges. Exploring and understanding the process involved in both higher-level abstractions and lower-level implementations is highly rewarding, and personal projects serve as an exceptional means to accomplish this goal. <br></br>
                                Alongside technical expertise, possesses strong organizational and team collaboration skills, as well as strong communication and writing skills, enabling the effective communication of complex ideas to both technical and non-technical individuals. Whether collaborating with diverse teams or creating comprehensive technical or academic documentation, consistently demonstrates the ability to articulate concepts with clarity and precision.
                            </Description>
                            <LinhaBranca></LinhaBranca>
                            <Description>
                                <SamsungLogo></SamsungLogo>
                                Working at Samsung Research and Development Institute provided opportunities to experiment the different stages of the development cycle for cutting-edge technologies, from conceptualization, high level proof-of-concept to final implementation in very interesting and innovative projects that would produce software in areas such as Biometrics Research, Windows Development, Android Development, Embedded Devices Development, UEFI Development and more.
                                One of the highlights of this internship was the participation in a complete Machine Learning Pipeline, which involved data collection, data pre-processing, feature extraction, model training and analysis, using tools such as Pandas, scikit-learn, numpy, seaborn, dtw-python, and many others. This experience not only contributed in expanding my knowledge of techniques in this field, but also allowed me to assist in the elaboration of an academic paper intended for submission to an international conference, as well as the development of a patent.

                                <UNESPLogo></UNESPLogo>
                                Developed a complete management web system using Firebase for UNESP University, which aimed to organize human and animal cells in nitrogen tanks. The system was designed to attend researchers needs under a multiple option search engine, while being mobile and user friendly. The introduction of this digital solution highly improved efficiency and organization compared to the previous non-digital organization.

                                <PersonalExperience></PersonalExperience>
                                Developed a website to promote and manage own brewing hobby project, along with an Android Application for temperature setup and an ESP8266 device to measure and control a refrigerator temperature. The measured temperature was inserted into Firebase Database, then used this data to plot a real-time chart for improved visualization.
                                <br></br>
                                Developed several Web (HTML, CSS, Javascript, React), Machine Learning, Android, Java, C/C++ and C# applications.

                            </Description>
                            <LinhaBranca></LinhaBranca>
                            <Education></Education>
                            <LinhaBranca></LinhaBranca>

                            <Description>
                                <BriefNote>
                                    Highly proficient in all the presented skills:
                                </BriefNote>

                                <Skill>
                                    <b>Web Development:</b> HTML, CSS, Javascript, Typescript, React, NodeJS
                                </Skill>

                                <Skill>
                                    <b>General Software Development:</b> Windows(Win32, UWP, .NET), Android(Java), Java, Python, C#, C, C++
                                </Skill>

                                <Skill>
                                    <b>Machine Learning:</b> Pandas, Scikit-learn, Numpy, time-series data manipulation, dtw-python, Dlib, OpenCV(Python/C++)
                                </Skill>

                                <Skill>
                                    <b>Databases:</b> MySQL, Postgres, Firebase Realtime Database, MongoDB
                                </Skill>

                                <Skill>
                                    <b>Systems:</b> Windows Systems, Linux Systems, Docker
                                </Skill>

                                <Skill>
                                    <b>IT Methodologies:</b> Scrum, Kanban
                                </Skill>

                                <Skill>
                                    <b>Digital Eletronics:</b> Arduino
                                </Skill>

                                <Skill>
                                    <b>Miscellaneous Tools:</b> Git, Visual Studio, Visual Studio Code, Virtual Machines(VirtualBox and others)
                                </Skill>

                                <Skill>
                                    <b>Fluent Languages:</b> Portuguese, English
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
                            <Description fontSize="20px" marginBottom="35px">
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