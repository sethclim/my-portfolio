import React from "react";

import { HStack, VStack, Grid, GridItem } from "../../components/LayoutComponents";

import Copy from "../../components/Copy";

import Text from "../../styles/text.module.scss"

class About extends React.Component {
  render() {
    return (
      
      <VStack>
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


        <HStack align="top" pt="10" alignItems="center">
          <p   className={Text.Title}>Connect:</p>
          <Copy />     
        </HStack>

      
        <p className={Text.Title}>Skills</p>
        <VStack align="top" pt="5" justifyContent="flex-bottom" >
          <Grid templateColumns='120px 1fr' gap={6}>
            <GridItem w='100%' h='3vh' justifyContent="start" >
              <p className={Text.subTitle}>Languages</p>
            </GridItem>
            <GridItem w='100%' h='3vh' justifyContent="start"  >
              <p className={Text.small}>Kotlin, Swift, JavaScript/Typescript, C#, Java, C++</p>
            </GridItem>
            <GridItem w='100%' h='3vh'>
              <p  className={Text.subTitle}>Databases</p>
            </GridItem>
            <GridItem w='100%' h='3vh'  >
              <p className={Text.small}>SQL, MongoDB, Room, CoreData</p>
            </GridItem>
            <GridItem w='100%' h='3vh'  >
              <p className={Text.subTitle}>Technology</p>
            </GridItem>
            <GridItem w='100%' h='3vh'>
              <p className={Text.small}>React, AWS, Apache, Docker</p>
            </GridItem>
            <GridItem w='100%' h='3vh' >
              <p className={Text.subTitle}>Tools</p>
            </GridItem>
            <GridItem w='100%' h='3vh'  >
              <p className={Text.small}>Git, Jira, VSCode, IntelliJ IDEA</p>
            </GridItem>
          </Grid>
        </VStack>

      </VStack>
    );
  }
}
export default About;
