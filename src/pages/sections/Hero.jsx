import React from "react";
// import { Link } from "react-scroll";

import Text from '../../styles/text.module.scss'

import { VStack } from "../../components/LayoutComponents";


export default class Hero extends React.Component {
  render() {
    return (
        <VStack h="50vh">
      
          <VStack align="start" h="50vh" p="5em 0 0 0">
              <VStack align="start" >
                <p className={Text.heroTitle}>Seth Climenhaga</p>
                <p className={Text.heroSubTitle} >Full Stack Developer</p>
              </VStack>

            <VStack align="start" w="50em" paddingBottom={5}>
              <p className={Text.small}>
                  I'm a computer science student who specializes in web applications
                  and mobile development on both android and iOS.

             
                </p>
            </VStack>
   
             {/* <Link
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
              </Link> */}

             
          </VStack>
      

          {/* <img className="main-img" src={typing_desk} alt="img" /> */}

          <p>{this.title}</p>
        </VStack>
    );
  }
}

