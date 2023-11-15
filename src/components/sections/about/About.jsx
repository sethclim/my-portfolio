import React from "react";

import { HStack, VStack, Grid, GridItem } from "../../LayoutComponents";
import Copy from "../../Copy";
import Text from "../../../styles/text.module.scss"
import Styles from "./About.module.scss"

class About extends React.Component {
  render() {
    return (
      <VStack id="about">
        <VStack p="1em 0">
          <p className={Text.Title}>About</p>
          {/* <hr className="new4"></hr> */}

            <p className={Text.small}>
            As a 4th year honours student in computer science at Sheridan College, I have honed my software development skills across many platforms including web, mobile, and desktop applications.  In addition, I have experience with data science and AI/machine learning applications     </p><br></br>
            <p className={Text.small}>Recently, I  completed an internship as a VR developer where I led development on a simulated training module for LSTA. I worked with external advisers on the project and developed a complete solution based on the derived requirements.  I also worked as an Intern at TCXR, where I developed and improved a data pipe for a Unity project.  I was responsible for designing and implementing new components of the system, and interfacing with the data team to communicate changes and gather new requirements. </p><br></br>
            <p className={Text.small}>I am passionate about building user-driven interfaces, robust backends, and creative branding that brings value to whatever system I’m developing. I possess a self-driven entrepreneurial mindset with a relentless determination to solve problems. </p><br></br>
            <p className={Text.small}>I believe that my strong work ethic developed through my extensive work experiences and dedication to enhancing my skills through my studies make me an ideal employee. I’m currently looking for internships and work opportunities in software development.
            </p>
        </VStack>

        <VStack p="1em 0">
          <p className={Text.Title}>Work Experience</p>
          <Work
           company="SpeakSynk Technology" 
           role="Algorithm Developer" 
           date="May 2023 - Present" 
           point1="Built initial product MVP to demonstrate to investor"
           point2="Deployed scalable version of product to AWS"
           point3="Improved ML models, and computer vision algorithms"
           point4="Developed backend infrascture components to serve customers"
           />
          <Work
           company="Artful Enrichment" 
           role="Mobile Developer" 
           date="Sept. 2023 - Present" 
           point1="Developed mobile app in React Native"
           point2="Implemented intuitive UI for seniors"
           point3="Interfaced with backend APIs for business logic"
           />
          <Work
           company="Sheridan Center For Mobile Innovation" 
           role="VR Developer" 
           date="May 2022 - May 2023" 
           point1="Developed VR interaction to simulate pharmaceutical factory"
           point2="3D modeled pharmaceutical factory equipment"
           point3="Designed simulation software architecture"
           />
          <Work
           company="The Commons XR" 
           role="Unity Developer" 
           date="April 2022 - Nov. 2022" 
           point3="Designed custom solutions for data collection from Unity"
           point1="Implemented data collection solutions"
           point2="Interfaced Between Data and Unity Team"
           />
          <Work
           company="Sample House" 
           role="Full Stack Developer" 
           date="Aug 2021 - Dec. 2021" 
           point3="Redesigned frontend written in React to a modern clean design to present to investors."
           point1="Implemented waveform player to preview audio samples and tooling to generate the waveform data."
           point2="Worked on payment system and analytics integrations."
           />
        </VStack>


        <VStack p="1em 0">
          <p className={Text.Title}>Skills</p>
          <VStack align="top" pt="5" justifyContent="flex-bottom" >
            <Grid templateColumns='200px 1fr' gap={10}>
              <GridItem w='100%' h='100%' justifyContent="center" >
                <p className={Text.med}>Languages</p>
              </GridItem>
              <GridItem w='100%' h='100%' justifyContent="center"   >
                <p className={Text.small}>Kotlin, Swift, JavaScript/Typescript, C#, Java, C++</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center" >
                <p  className={Text.med}>Databases</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center"  >
                <p className={Text.small}>SQL, MongoDB, Room, CoreData</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center"  >
                <p className={Text.med}>Technology</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center" >
                <p className={Text.small}>React, AWS, Apache, Docker, Unity</p>
              </GridItem>
              <GridItem w='100%' h='100%' justifyContent="center" >
                <p className={Text.med}>Tools</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center"  >
                <p className={Text.small}>Git, Jira, VSCode, IntelliJ IDEA</p>
              </GridItem>
            </Grid>
          </VStack>
        </VStack>

        <HStack align="top" p="1em 0" alignItems="center">
          <p className={Text.Title}>Connect:</p>
          <Copy />     
        </HStack>
      
      </VStack>
    );
  }
}
export default About;


const Work = ({company, role, date, point1, point2, point3 }) => {
  return(
    <VStack w="100%" p="20px 0 0 0">
      <VStack className={Styles.workTitleWrap} p="0" h="100%">
        <VStack className={Styles.workWrap}  w="100%" p="0" m="0" justifyContent="flex-start">
            <p className={Styles.name}>{role}</p>
            <p className={Styles.cn}>{company}</p> 
        </VStack>
        <HStack className={Styles.dateWrap} w="100%" justifyContent="flex-start">
          <p className={Styles.cn}>{date}</p>
        </HStack>
      </VStack>
      <ul className={Styles.desc}>
        <li>{point1}</li>
        <li>{point2}</li>
        <li>{point3}</li>
      </ul>
    </VStack>
  )
}