import React from "react";
import { Text, VStack,Container, Flex, HStack, Box, Grid, GridItem } from '@chakra-ui/react'

import Copy from "./Copy";

class About extends React.Component {
  render() {
    return (
      
      <Container maxW='container.lg'>
        <Text color="brand.dark" fontSize={50}>About</Text>
        {/* <hr className="new4"></hr> */}
        <Flex align="left" pt={5} >
          <Text color='brand.2' align="left">
          I'm a computer science student with a passion for business and
                  software development. I'm experienced in object-oriented
                  programming including design with UML. Currently, I've built
                  applications for web, android, iOS, and desktop platform. In
                  addition to my Computer Science degree, I have a Bachelor of
                  Music during which I took electives in accounting and
                  business.
          </Text>
        </Flex>

        <HStack align="top" pt="10" alignItems="center">

  
            <Text mr={50}  fontSize={30}>Connect:</Text>

            <Box pt={1} >
              <Copy />
            </Box>

        </HStack>


        <Text pt={10} fontSize={30}>Skills</Text>
        <VStack align="top" pt="5" justifyContent="flex-bottom" >
        <Grid templateColumns='120px 1fr' gap={6}>
          <GridItem w='100%' h='10' alignItems='center' ><Text  fontSize={20} fontWeight='bold'>Languages</Text></GridItem>
          <GridItem w='100%' h='10' >
            <Text color='brand.2'  fontSize={20}>Kotlin, Swift, JavaScript/Typescript, C#, Java, C++</Text>
          </GridItem>
          <GridItem w='100%' h='10'><Text  fontSize={20} fontWeight='bold'>Databases</Text></GridItem>
          <GridItem w='100%' h='10'  ><Text color='brand.2' fontSize={20}>SQL, MongoDB, Room, CoreData</Text></GridItem>
          <GridItem w='100%' h='10'  ><Text fontSize={20} fontWeight='bold'>Technology</Text></GridItem>
          <GridItem w='100%' h='10' ><Text color='brand.2' fontSize={20}>React, AWS, Apache, Docker</Text></GridItem>
          <GridItem w='100%' h='10' ><Text fontSize={20} fontWeight='bold'>Tools</Text></GridItem>
          <GridItem w='100%' h='10'  ><Text color='brand.2' fontSize={20}>Git, Jira, VSCode, IntelliJ IDEA</Text></GridItem>
        </Grid>
      
        </VStack>

    
      </Container>
    );
  }
}
export default About;
