//Components
import {Logo} from "../SVG/SVGs";
import { HStack } from "../LayoutComponents";

//Styles
import Text from "../../styles/text.module.scss"
import Button from "../../styles/button.module.scss"
import styles from "./Header.module.scss"

import {scroll} from "../scroll.js"

const Header = () => {

  return (
    <HStack alignItems="center" h='6em' justifyContent="space-between">
      <Logo
        fill={'#fff'}
        width={"2em"}
        hieght={"auto"}
        className="logo" />

      <nav className={styles.nav}>
        <HStack justifyContent="space-between" alignItems="center">
          <a className={`${Text.headerLink}`} onClick={()=>scroll('#projects')}>
            Projects
          </a>    
          <a  onClick={()=>scroll('#about')} className={`${Text.headerLink}`}>
            About
          </a>  
          <a
            className={Button.resume}
            href="/my-prortfolio/Resume.pdf"
            rel="noopener noreferrer"
            target="_blank">
             
                Resume
              
             
          </a> 
        </HStack>
      </nav>
      {/* <Switch id='email-alerts' onChange={toggleColorMode} /> */}  
    </HStack>
  );
}

export default Header;