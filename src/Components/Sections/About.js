import React from "react";
import { Text, VStack,Container, Flex, Spacer, Button, ListItem, HStack, UnorderedList, Box } from '@chakra-ui/react'
import { IoMailOpen } from "react-icons/io5";

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
        <HStack align="top" pt="5" >

           <Flex  w="20%">
            <Text fontSize={20}>Frontend</Text>
          </Flex>

    
          <UnorderedList pr={8} pt={2}>
            <ListItem>Python</ListItem>
            <ListItem>C#</ListItem>
          </UnorderedList>

        
    
          <UnorderedList pr={8} pt={2}>
            <ListItem>Python</ListItem>
            <ListItem>C#</ListItem>
          </UnorderedList>

        </HStack>

        <HStack align="top" pt="5" >

          <Flex  w="20%">
            <Text fontSize={20}>Backend</Text>
          </Flex>

      
          <UnorderedList pr={8} pt={2}>
            <ListItem>Python</ListItem>
            <ListItem>C#</ListItem>
          </UnorderedList>


       
          <UnorderedList pr={8} pt={2}>
            <ListItem>Python</ListItem>
            <ListItem>C#</ListItem>
          </UnorderedList>

        </HStack>

        <HStack align="top" pt="5" >

          <Flex  w="20%">
            <Text fontSize={20}>Tools</Text>
          </Flex>

          <UnorderedList pr={8} pt={2}>
            <ListItem>Python</ListItem>
            <ListItem>C#</ListItem>
          </UnorderedList>


 
          <UnorderedList pr={8} pt={2}>
            <ListItem>Python</ListItem>
            <ListItem>C#</ListItem>
          </UnorderedList>

        </HStack>

    
      </Container>
    );
  }
}
export default About;
