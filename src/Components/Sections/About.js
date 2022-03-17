import React from "react";
import { Text, VStack,Container, Flex, HStack, Box } from '@chakra-ui/react'

import Copy from "./Copy";

class About extends React.Component {
  render() {
    return (
      
      <Container maxW='container.lg'>
        <Text color="white" fontSize={50}>About</Text>
        {/* <hr className="new4"></hr> */}
        <Flex align="left" pt={5} >
          <Text align="left">
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


        <Text pt={10} fontSize={30}>Tech Stack</Text>
        <VStack align="top" pt="5" justifyContent="flex-bottom" >
          <HStack>  
              <Text fontSize={20}>Fontend</Text>
              <Text fontSize={15}>Python</Text>
              <Text fontSize={15}>C#</Text>
              <Text fontSize={15}>Python</Text>
              <Text fontSize={15}>C#</Text>
          </HStack>
        </VStack>

        <VStack align="top" pt="5" justifyContent="flex-bottom" >
          <HStack>
              <Text fontSize={20}>Backend</Text>
              <Text fontSize={15}>Python</Text>
              <Text fontSize={15}>C#</Text>
              <Text fontSize={15}>Python</Text>
              <Text fontSize={15}>C#</Text>
          </HStack>
        </VStack>
        <VStack align="top" pt="5" justifyContent="flex-bottom" >
          <HStack>
              <Text fontSize={20}>Tools</Text>
              <Text fontSize={15}>Python</Text>
              <Text fontSize={15}>C#</Text>
              <Text fontSize={15}>Python</Text>
              <Text fontSize={15}>C#</Text>
          </HStack>
      
        </VStack>

    
      </Container>
    );
  }
}
export default About;
