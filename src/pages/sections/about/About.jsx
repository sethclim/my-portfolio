import React from "react";

import { HStack, VStack, Grid, GridItem } from "../../../components/LayoutComponents";
import Copy from "../../../components/Copy";
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
            I'm a computer science student with a passion for business and
                    software development. I'm experienced in object-oriented
                    programming including design with UML. Currently, I've built
                    applications for web, android, iOS, and desktop platform. In
                    addition to my Computer Science degree, I have a Bachelor of
                    Music during which I took electives in accounting and
                    business.
            </p>
        </VStack>

        <VStack p="1em 0">
          <p className={Text.subTitle}>Work Experience</p>
          <Work
           company="Sheridan Center For Mobile Innovation" 
           role="VR Developer" 
           date="June 2020 - Present" 
           point1="Developed VR interaction to simulate pharmaceutical factory"
           point2="3D modeled pharmaceutical factory equipment"
           point3="Designed simulation software architecture"
           />
          <Work
           company="The Commons XR" 
           role="Unity Developer" 
           date="May 2020 - Present" 
           point3="Designed custom solutions for data collection from Unity"
           point1="Implemented data collection solutions"
           point2="Interfaced Between Data and Unity Team"
           />
          <Work
           company="Sample House" 
           role="Full Stack Developer" 
           date="May 2020 - Present" 
           point3="Redesigned frontend written in React to a modern clean design to present to investors."
           point1="Implemented waveform player to preview audio samples and tooling to generate the waveform data."
           point2="Worked on payment system and analytics integrations."
           />
        </VStack>


        <VStack p="1em 0">
          <p className={Text.subTitle}>Skills</p>
          <VStack align="top" pt="5" justifyContent="flex-bottom" >
            <Grid templateColumns='200px 1fr' gap={6}>
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
          <p className={Text.subTitle}>Connect:</p>
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
        <VStack className={Styles.workTitleWrap}  w="100%" h="2em" p="0" m="0" justifyContent="flex-start">
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