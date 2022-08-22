import React from "react";
//import { Link as ScrolLink } from "react-scroll";
import Logo from "../SVG/logo";


import Text from "../../styles/text.module.scss"

import { HStack } from "../LayoutComponents";

import styles from "./Header.module.scss"

const Header = () => {
    return (
    
         <HStack alignItems="center" h='5em'>
    
          <Logo
            fill={'brand.dark'}
            width={"2em"}
            hieght={"auto"}
            className="logo" />

          <nav className={styles.nav}>
            <HStack justifyContent="space-between">
               <a
                  //as={ScrolLink}
                  // activeClass="active"
                  // to="Projects" 
                  // spy={true}
                  // smooth={true}
                  // offset={-70}
                  // duration={500}
                  className={`${Text.headerLink}`}
                >
                  Projects
                </a>    
                <a
                  //as={ScrolLink}
                  // activeClass="active"
                  // to="About"
                  // spy={true}
                  // smooth={true}
                  // offset={-70}
                  // duration={500}
                  className={`${Text.headerLink}`}
                >
                  About
                </a>     
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

          {/* <Switch id='email-alerts' onChange={toggleColorMode} /> */}
          </HStack>
    );
}

export default Header;
