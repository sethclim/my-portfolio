import React from "react";
import { Link } from "react-scroll";

import { Text, VStack,Container, Flex, Spacer, Button } from '@chakra-ui/react'

class FrontPage extends React.Component {
  render() {
    return (
      <Container maxW='container.lg'    className="red">
        <Flex direction="column"  h={700}>
      
          <VStack align="start" h={350}>
              <Spacer />
              <VStack align="start" >
                <Text fontSize='5xl' color="brand.dark" >Seth Climenhaga</Text>
                <Text fontSize='3xl' color="brand.2" >Full Stack Developer</Text>
              </VStack>

            <VStack align="start" w="50em" paddingBottom={5}>
              <Text color='brand.2' fontSize='xl' align="left">
                  I'm a computer science student who specializes in web applications
                  and mobile development on both android and iOS.

             
                </Text>
            </VStack>
   
             <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >           
                <Button background="brand.dark" _hover={{bg:'brand.primary'}} color="white">
                  Projects 
                </Button>
              </Link>

             
          </VStack>
      

          {/* <img className="main-img" src={typing_desk} alt="img" /> */}

          <p>{this.title}</p>
          <Spacer />
        </Flex>
      </Container>
     
    );
  }
}
export default FrontPage;
