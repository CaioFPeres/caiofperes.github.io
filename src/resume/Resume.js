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
import Bullet from "./Bullet"

class Resume extends React.Component {
    
    render() {
        return(
            <Background>

                <FolhaFrente>

                    <LeftColumn>

                        <SectionDiv marginTop={227}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Profile</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={124}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Experience</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={541}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Education</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={24}>
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
                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Eager to bring value to the technology industry through hard work and commitment to quality. Motivated individual with strong work ethic and ability to work independently.<br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Possess diverse experience in various areas of software development. With a strong passion and curiosity for technology, truly enjoys executing personal projects that provide opportunities to learn and grow, even in the face of challenges. Exploring and understanding the process involved in both higher-level abstractions and lower-level implementations is highly rewarding, and personal projects serve as an exceptional means to accomplish this goal.<br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Alongside technical expertise, possesses strong organizational and team collaboration skills, as well as strong communication and writing skills, enabling the effective communication of complex ideas to both technical and non-technical individuals.<br></br>
                                    </Bullet>
                                </Bullet>
                            </Description>
                            <LinhaBranca></LinhaBranca>
                            <Description>
                                <SamsungLogo></SamsungLogo>
                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Working at Samsung Research and Development Institute provided opportunities to experiment the different stages of the development cycle for cutting-edge technologies, from conceptualization, high level proof-of-concept to final implementation in very interesting and innovative projects that would produce software in areas such as <b>biometrics</b> research, <b>Windows</b> development, <b>Android</b> development, <b>embedded devices</b> development, <b>UEFI</b> development and more. <br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Engaged in an extensive <b>research project</b> in the field of <b>biometrics</b>. This project involved the entire <b>machine learning pipeline</b>, which included data collection, data pre-processing, feature extraction, model training and analysis, using tools such as Pandas, Scikit-learn, Numpy, Seaborn, dtw-python, and many others. This experience not only contributed in expanding my knowledge of techniques in this field, but also allowed me to assist in the elaboration of an <b>academic paper</b> intended for submission to an international conference, as well as the development of a <b>patent</b>. <br></br>
                                    </Bullet>
                                </Bullet>

                                <UNESPLogo></UNESPLogo>
                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Developed a complete management <b>web system</b> for UNESP University's Cell Research Department, in order to efficiently organize human and animal cells in nitrogen tanks. The introduction of this digital solution <b>highly improved efficiency and organization</b> compared to the previous non-digital approach.<br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Employed <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, along with essential <b>Firebase services</b> including Firebase Realtime Database, Firebase Authentication, Firebase Storage and Firebase Hosting. The system was designed to attend researchers needs under a multiple option search engine, while being mobile and user friendly. <br></br>
                                    </Bullet>
                                </Bullet>
                                    
                                <PersonalExperience></PersonalExperience>
                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Developed a <b>website</b> to promote and manage own brewing hobby project. Developed an <b>Android application</b> for temperature setup, and implemented an <b>ESP8266 device</b> to accurately measure and control refrigerator temperature.<br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        The website was made using HTML, CSS and Javascript. The measured temperatures were inserted into Firebase Realtime Database, then used this data to plot a <b>real-time chart</b> for improved visualization and analysis. <br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Developed several Web (HTML, CSS, Javascript, React), Machine Learning, Java, Android, Windows, C/C++ and C# applications.<br></br>
                                    </Bullet>
                                </Bullet>

                            </Description>
                            <LinhaBranca></LinhaBranca>
                            <Description>
                                <Education></Education>
                            </Description>
                            <LinhaBranca></LinhaBranca>

                            <Description>
                                <BriefNote>
                                    Highly proficient in all the presented skills:
                                </BriefNote>

                                <Skill>
                                    <b>General Software Development:</b> Windows(Win32, UWP, .NET), Android(Java), Java, Python, UEFI(EDKII), C, C++, C#
                                </Skill>

                                <Skill>
                                    <b>Web Development:</b> HTML, CSS, Javascript, Typescript, React, NodeJS
                                </Skill>

                                <Skill>
                                    <b>Data Science & Machine Learning:</b> Pandas, Scikit-learn, Numpy, dtw-python, Dlib(Python/C++), OpenCV(Python/C++)
                                </Skill>

                                <Skill>
                                    <b>Databases:</b> MySQL, Postgres, Firebase Realtime Database, MongoDB
                                </Skill>

                                <Skill>
                                    <b>Operating Systems:</b> Windows Systems, Linux Systems
                                </Skill>

                                <Skill>
                                    <b>IT Methodologies:</b> Scrum, Kanban
                                </Skill>

                                <Skill>
                                    <b>Digital Eletronics:</b> Arduino
                                </Skill>

                                <Skill>
                                    <b>Miscellaneous Tools:</b> Git, Docker, Virtual Machines(VirtualBox and others)
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