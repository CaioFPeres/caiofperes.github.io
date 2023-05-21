import React from 'react';
import MainBackground from "./MainBackground";
import CardProject from "./CardProject";
import androidpreview from "./images/androidpreview.jpg";
import ProjectsContainer from "./ProjectsContainer";
import metricspreview from "./images/metricspreview.png";
import minecraftpreview from "./images/minecraftpreview.png";
import messagepreview from "./images/messagepreview.png"
import googlepreview from "./images/google-logo.png";
import filepreview from "./images/fileicon.jpg";
import serialpreview from "./images/serialpreview.png";
import neuralnetpreview from "./images/neuralnetpreview.png";
import dllinjector from "./images/dllinjectorpreview.png";
import trainerpreview from "./images/trainerpreview.png";
import wakeonlanpreview from "./images/wakeonlanpreview.png";
import facedetectionpreview from "./images/facedetectionpreview.png";
import smiledetectionpreview from "./images/smiledetectionpreview.png";
import loadbalancerpreview from "./images/loadbalancerpreview.png"
import serverpreview from "./images/serverpreview.png"


class OtherProjects extends React.Component {
    
    render() {
        return(
            <MainBackground>
                <ProjectsContainer>
                    <CardProject content={{ 
                        src: serialpreview, 
                        title: "Windows Serial Library",
                        description: "This is a Serial Library created in C++ for Windows, using Windows API. Can be used with Arduino-like boards.",
                        code: "https://github.com/CaioFPeres/WinSerialLibrary",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{
                        src: dllinjector,
                        title: "DLL Injector and Monitor",
                        description: "This is a project for a DLL Injector and monitor, as well as with the DLL that will intercept recv() and send() calls.",
                        code: "https://github.com/CaioFPeres/DLLInjectionAndMonitor",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{
                        src: trainerpreview,
                        title: "Trainer Library",
                        description: "This is a library made in C++ using WinAPI that shows how to create a trainer (without UI for now) for any game, given the address to read from or to write to.",
                        code: "https://github.com/CaioFPeres/TrainerLibrary",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: androidpreview, 
                        title: "Frevo's Fermentaria Android App", 
                        description: "Created with Android Studio (Java).",
                        code: "https://github.com/CaioFPeres/FrevosFermentariaApp",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{
                        src: wakeonlanpreview,
                        title: "WakeOnLanArduino",
                        description: "This is an arduino code to wake a PC that is on the same private network than an Arduino Board.",
                        code: "https://github.com/CaioFPeres/WakeOnLanArduino",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{
                        src: facedetectionpreview,
                        title: "Face Detection Project",
                        description: "This is a CNN face detection project made with Dlib in C++, along with pre processing scripts in python. ",
                        code: "https://github.com/CaioFPeres/FaceDetectionProject",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{
                        src: smiledetectionpreview,
                        title: "FEI Smile Detection",
                        description: "This is a CNN project made with Dlib for detecting smiles, using the FEI face dataset, folder b (smiling subjects).",
                        code: "https://github.com/CaioFPeres/FEISmileDetection",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: googlepreview, 
                        title: "Google Image Web Scraper", 
                        description: "A web scrapper made with Nodejs to download Google Images.",
                        code: "https://github.com/CaioFPeres/GoogleImageWebScraper",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: googlepreview, 
                        title: "Google Image Curl",
                        description: "C++ Windows program to download images off Google using Google Custom Search API.",
                        code: "https://github.com/CaioFPeres/GoogleImageCurl",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: filepreview, 
                        title: "File Sorter",
                        description: "C++ WinAPI program with UI that can watch a directory for changes and apply a given organization.",
                        code: "https://github.com/CaioFPeres/FileSorter",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: neuralnetpreview, 
                        title: "Neural Network From Scratch",
                        description: "This is a Neural Network made from Scratch in C++ to be used for handwritten number recognition.",
                        code: "https://github.com/CaioFPeres/NeuralNetworkScratch",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: metricspreview, 
                        title: "Network Metrics",
                        description: "This is a infrastructure made with 2 VMs instanced through Vagrant, with Prometheus, cAdvisor(container) and Node Exporter, plus 3 custom Nodejs aplications.",
                        code: "https://github.com/CaioFPeres/NetworkMetrics",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{
                        src: loadbalancerpreview,
                        title: "Load Balancer",
                        description: "This is a L4 Load Balancer implemented with Round Robin approach in C#, using Docker.",
                        code: "https://github.com/CaioFPeres/LoadBalancer",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{
                        src: serverpreview,
                        title: "Client and Server in C++ for Windows",
                        description: "Client and Server in C++ for Windows.",
                        code: "https://github.com/CaioFPeres/CPPClientServer",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: minecraftpreview, 
                        title: "Minecraft Mods",
                        description: "Server side mods (plugins) made in Java, using bukkit/spigot/paper library.",
                        code: "https://github.com/CaioFPeres/SkyChunksAndSkyIslands",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: messagepreview, 
                        title: "Java Messaging Aplication (Server - Client)",
                        description: "A java desktop messaging aplication made with JavaFX, for server and client communication.",
                        code: "https://github.com/CaioFPeres/DesktopMessageAppJava",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                </ProjectsContainer>
            </MainBackground>
        );
    };
}

export default OtherProjects;