import React from "react";
import { Link as ScrolLink } from "react-scroll";
import Logo from "./SVG/logo";


import { useColorMode } from '@chakra-ui/react'

import { Flex, Spacer, Link, Container, HStack,Switch } from '@chakra-ui/react'


const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode()

    return (
     
        <Container maxW='container.lg' mt="3"  pr={7}>
         <Flex alignItems="center">
    
          <Logo
            fill={"#6c82fb"}
            width={"2em"}
            hieght={"auto"}
            className="logo" />

          <nav className="main-nav">
            <HStack pl="6">
               <Link
                  as={ScrolLink}
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  color="brand.lightGrey"
                >
                  Projects
                </Link>    
                <Link
                  as={ScrolLink}
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  color="brand.lightGrey"
                >
                  About
                </Link>     
            </HStack>
        
              {/* <li>
                <a
                  className="resume-button"
                  href={Resume}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>Resume</p>
                </a>
              </li> */}
            
          </nav>
          <Spacer />

          <Switch id='email-alerts' onChange={toggleColorMode} />
          </Flex>
        </Container>
    );
}

export default Header;
