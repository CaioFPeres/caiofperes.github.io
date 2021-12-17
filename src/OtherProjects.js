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


class OtherProjects extends React.Component {
    
    render() {
        return(
            <MainBackground>
                <ProjectsContainer>
                    <CardProject content={{ 
                        src: androidpreview, 
                        title: "Frevo's Fermentaria Android App", 
                        description: "Created with Android Studio (Java).",
                        href: "https://github.com/CaioFPeres/FrevosFermentariaApp",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: googlepreview, 
                        title: "Google Image Web Scraper", 
                        description: "A web scrapper made with Nodejs to download Google Images.",
                        href: "https://github.com/CaioFPeres/GoogleImageWebScraper",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: googlepreview, 
                        title: "Google Image Curl",
                        description: "C++ Windows program to download images off Google using Google Custom Search API.",
                        href: "https://github.com/CaioFPeres/GoogleImageCurl",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: filepreview, 
                        title: "File Sorter",
                        description: "C++ WinAPI program with UI that can watch a directory for changes and apply a given organization.",
                        href: "https://github.com/CaioFPeres/FileSorter",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: serialpreview, 
                        title: "Windows Serial Library",
                        description: "This is a Serial Library created in C++ for Windows, using Windows API. Can be used with Arduino-like boards.",
                        href: "https://github.com/CaioFPeres/WinSerialLibrary",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: metricspreview, 
                        title: "Network Metrics",
                        description: "This is a infrastructure made with 2 VMs instanced through Vagrant, with Prometheus, cAdvisor(container) and Node Exporter, plus 3 custom Nodejs aplications.",
                        href: "https://github.com/CaioFPeres/NetworkMetrics",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: minecraftpreview, 
                        title: "Minecraft Mods",
                        description: "Server side mods (plugins) made in Java, using bukkit/spigot/paper library.",
                        href: "https://github.com/CaioFPeres/SkyChunksAndSkyIslands",
                        imageHeight: 400,
                        textHeight: 120
                        }}>
                    </CardProject>
                    <CardProject content={{ 
                        src: messagepreview, 
                        title: "Java Messaging Aplication (Server - Client)",
                        description: "A java desktop messaging aplication made with JavaFX, for server and client communication.",
                        href: "https://github.com/CaioFPeres/DesktopMessageAppJava",
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