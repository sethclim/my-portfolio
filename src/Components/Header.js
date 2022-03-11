import React from "react";
import { Link as ScrolLink } from "react-scroll";
import Logo from "./SVG/logo";
import MenuButton from "./Menu/MenuButton";
import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";

import { Flex, Spacer, Link, Container, HStack } from '@chakra-ui/react'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }
  render() {
    const menu = ["Projects", "About", "Contact"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });
    return (
     
        <Container maxW='container.lg'>
         <Flex alignItems="center">
    
          <Logo
            fill={"#6c82fb"}
            width={"2em"}
            hieght={"auto"}
            className="logo" />

          <Spacer />

          <nav className="main-nav">
            <HStack>
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
                <Link
                  as={ScrolLink}
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  color="brand.lightGrey"
                >
                  Contact
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
          </Flex>
        </Container>
    );
  }
}

export default Header;
