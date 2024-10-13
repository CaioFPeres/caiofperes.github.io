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
import LeftColumn from './LeftColumn';
import LinhaCinza from './LinhaCinza';
import LeftSection from './LeftSection';
import SectionDiv from './SectionDiv';
import SamsungLogo from './SamsungLogo';
import SamsungInternship from './SamsungInternship';
import SamsungRegular from './SamsungRegular';
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

                        <SectionDiv marginTop={126}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Experience</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={852}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Education</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={24}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Technical Skills</LeftSection>
                        </SectionDiv>

                        {/*
                        <SectionDiv marginTop={213}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Hobbies</LeftSection>
                        </SectionDiv>
                        */}

                        <SectionDiv marginTop={212}>
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
                                <SamsungRegular></SamsungRegular>

                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Responsible for conducting research to <b>explore vulnerabilities</b> in electronic devices using advanced <b>deep learning</b> techniques with <b>PyTorch</b>. Conducted <b>attacks</b> to strengthen <b>defenses</b> and gain insights into the issue. Continuously optimized preprocessing techniques and model training methodologies to enhance speed and achieve superior results{/*, guided by the knowledge acquired from intensive research */}.<br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Implemented a one-dimensional <b>CNN architecture</b> for signal feature extraction, along with preprocessing techniques including signal drift detection, signal cropping, signal filtering, and signal enhancement through augmentation methods such as shifting and noise injection, both online and offline. Employed strategies like down-sampling and the <b>One vs One</b> model approach to further refine the attack accuracy.
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Decreased sample preprocessing time by <b>17x</b>, through the implementation of <b>parallel processing</b> techniques in both <b>CPU</b> and <b>GPU</b>. <br></br>
                                        {/*Decreased sample preprocessing time by <b>12x</b>, through the implementation of <b>GPGPU parallel processing</b> techniques. Implemented <b>CUDA kernels</b> for efficient signal cropping, noise injection, and min/max <b>reductions</b>. Filtered frequencies using <b>cuFFT</b> for a CUDA fast Fourier transform implementation, applied median filter using <b>NPP</b> library and implemented moving averages through <b>convolutions</b>.*/}
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Led the development of an <b>Android system-level security service</b> intended to be on <b>Samsung Galaxy flagships</b>. Developed in <b>Java</b> with performance intensive parts in <b>C++</b>, such as model inference and data manipulation.
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Led the development of an <b>Android user-level application</b> intended to be on every <b>Samsung Galaxy</b>. Developed in <b>Kotlin</b> and utilized <b>Jetpack Compose</b> to create a dynamic and intuitive user interface. Collaborated closely with <b>cross-functional teams</b> to ensure seamless deployment and maintain high performance standards.
                                    </Bullet>
                                </Bullet>

                                <SamsungInternship></SamsungInternship>

                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Working at Samsung Research and Development Institute provided opportunities to experiment the different stages of the development cycle for cutting-edge technologies, from conceptualization, high level proof-of-concept to final implementation in very interesting and innovative projects that would produce software in areas such as <b>biometrics</b> research, <b>Windows</b> development, <b>Android</b> development, <b>embedded devices</b> development, <b>UEFI</b> development and more. <br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Engaged in an extensive <b>research project</b> in the field of <b>biometrics</b>. This project involved a complete <b>machine learning pipeline</b>, which included the implementation of a <b>CNN architecture</b>, data collection, data preprocessing, feature extraction, model training and analysis, using tools such as Pandas, Pytorch, Scikit-learn, Numpy, Seaborn, and many others. The project also included the conversion of the inference pipeline to C++ for the final deployment on <b>Android</b>, using <b>ONNX Runtime</b>. This experience not only contributed in expanding my knowledge of techniques in this field, but also allowed me to assist in the elaboration of an <b>academic paper</b> intended for submission to an international conference, as well as the development of a <b>patent</b>. <br></br>
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
                                    <b>General Software Development:</b> Windows(Win32, UWP, .NET), Android(Java, Kotlin, Jetpack Compose), Java, Python, UEFI(EDKII), C, C++, C#, CUDA
                                </Skill>

                                <Skill>
                                    <b>Web Development:</b> HTML, CSS, Javascript, Typescript, React, NodeJS
                                </Skill>

                                <Skill>
                                    <b>Data Science & Machine Learning:</b> Pandas, Scikit-learn, Numpy, Pytorch, Dlib(Python/C++), OpenCV(Python/C++), ONNX
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
                        
                            {/*
                            <LinhaBranca></LinhaBranca>
                            <Hobbies></Hobbies>*/}
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