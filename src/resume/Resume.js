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
                            <LeftSection>Experience</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={638}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Education</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={24}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection>Technical Skills</LeftSection>
                        </SectionDiv>

                        <SectionDiv marginTop={193}>
                            <LinhaCinza></LinhaCinza>
                            <LeftSection marginBottom = "59px">Achievements</LeftSection>
                        </SectionDiv>

                    </LeftColumn>

                    <BlockDiv width = "870px">

                        <FaixaCinza>
                            <PersonalInfo></PersonalInfo>
                        </FaixaCinza>

                        <InternBackground>

                            <LinhaBranca></LinhaBranca>

                            <Description>

                                <SamsungLogo></SamsungLogo>
                                <SamsungRegular></SamsungRegular>

                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Led the development of new features for the <b>Samsung Health</b> Android application, present on every <b>Samsung Galaxy</b> and with more than <b>1 billion</b> downloads on play store. Developed in <b>Kotlin</b> with <b>Jetpack Compose</b>, and collaborated closely with <b>cross-functional teams</b> to meet high performance and accuracy standards.
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Fine-tuned and trained a <b>Generative AI</b> model from scratch using <b>Pytorch</b> to reconstruct missing parts of images. The model was trained on <b>GPUs</b> achieving <b>98%</b> similarity with real data, and was optimized for efficient execution on <b>Android</b> devices.
                                        {/*Led the development of an <b>Android system-level security service</b> intended to be on <b>Samsung Galaxy flagships</b>. Developed in <b>Java</b> with performance intensive parts in <b>C++</b>. Automated its complex build system which <b>saved days</b> for new configurations.*/}
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Led research to <b>explore vulnerabilities</b> in electronic devices using advanced <b>deep learning</b> techniques with <b>PyTorch</b>. Conducted <b>over 100</b> experiments to strengthen both the <b>attack and defense</b> and gain insights into the issue. <a href="https://dsn2025.github.io/cpaccepted.html">[1]</a>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Implemented a one-dimensional <b>CNN architecture</b> for signal feature extraction and applied preprocessing techniques including signal drift detection, cropping, filtering, and augmentation through shifting and noise injection, which <b>increased data volume by 200%</b>.
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Employed the <b>One vs One</b> model approach resulting in an <b>18% improvement</b> in attack success rate.
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Decreased sample preprocessing time by <b>17x</b>, with the implementation of <b>parallel processing</b> techniques in both <b>CPU</b> and <b>GPU</b>.
                                    </Bullet>
                                </Bullet>

                                <SamsungInternship></SamsungInternship>

                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Engaged in an extensive <b>research project</b> in the field of <b>biometric authentication</b>.
                                    </Bullet>
                                    <Bullet ul={false}>
                                        This project involved a complete <b>multimodal machine learning pipeline</b>, which included the implementation of a <b>CNN architecture</b>, data collection, data preprocessing, feature extraction, model training and analysis.
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Utilized <b>Pandas</b>, <b>Pytorch</b>, <b>Scikit-learn</b>, <b>Numpy</b> and <b>Seaborn</b>. Converted the <b>Python</b> inference pipeline to <b>C++</b> for the final deployment on <b>Android</b>, using <b>ONNX Runtime</b>. 
                                    </Bullet>
                                    <Bullet ul={false}>
                                        This novel approach achieved an accuracy of <b>99%</b> for authenticating users and resulted in the elaboration of an <b>academic paper</b> and submission of a <b>patent</b>. <a href="https://drive.google.com/file/d/124qK9xnE40dKGwbh7EYc-JUdy6nnFT3s/view?usp=sharing">[2]</a>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Implemented many more software in <b>Java</b> and <b>C/C++</b> for <b>Windows</b>, <b>Android</b> and <b>embedded devices</b>.
                                    </Bullet>
                                </Bullet>

                                <UNESPLogo></UNESPLogo>
                                <Bullet ul={true}>
                                    <Bullet ul={false}>
                                        Developed a complete management <b>web system</b> for UNESP University's Cell Research Department, in order to efficiently organize human and animal cells in nitrogen tanks, which improved their workflow over <b>400%</b> compared to the previous non-digital approach.<br></br>
                                    </Bullet>
                                    <Bullet ul={false}>
                                        Employed <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, along with essential <b>Firebase services</b> including Firebase Realtime Database, Firebase Authentication, Firebase Storage and Firebase Hosting. <br></br>
                                    </Bullet>
                                </Bullet>
                                
                                {/*
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
                                */}

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
                                    <b>Software Development:</b> Windows(Win32, UWP, .NET), Android(Java, Kotlin, Jetpack Compose), Java, Python, C, C++, C#, CUDA, HTML, CSS, Javascript, Typescript, React, NodeJS
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
                                    <b>Miscellaneous Tools:</b> Git, Docker, Virtual Machines(VirtualBox, HyperV, QEMU)
                                </Skill>

                                <Skill>
                                    <b>Fluent Languages:</b> Portuguese, English
                                </Skill>

                            </Description>
                        
                            <LinhaBranca></LinhaBranca>
                            <Description fontSize="16px" marginBottom="0px">
                                <div style={{marginBottom: "5px"}}>
                                    <a href="https://dsn2025.github.io/cpaccepted.html">[1]</a> On the Feasibility of Exploiting the USB Power Line for Side-Channel Attacks against Samsung Smartphone Models
                                </div>
                                <div style={{marginBottom: "5px"}}>
                                    <a href="https://drive.google.com/file/d/124qK9xnE40dKGwbh7EYc-JUdy6nnFT3s/view?usp=sharing">[2]</a> US-20250182529-A1
                                </div>
                                <div style={{marginBottom: "0px"}}>
                                    TOEFL ITP B2
                                </div>
                            </Description>

                        </InternBackground>
                    </BlockDiv>
                </FolhaFrente>
            </Background>
        );
    };
}

export default Resume;