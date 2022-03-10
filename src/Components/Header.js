import React from "react";
// import { Link } from "react-scroll";
import Logo from "./SVG/logo";
import MenuButton from "./Menu/MenuButton";
import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";

import { Flex, Spacer, Link, Container } from '@chakra-ui/react'


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
            <ul className="main-nav-list">
              <li>
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
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
            </ul>
          </nav>
          </Flex>
        </Container>
    );
  }
}

export default Header;
