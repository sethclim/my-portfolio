import React from "react";
// import { Link } from "react-scroll";

import Text from '../../../styles/text.module.scss'


import { HStack, VStack } from "../../LayoutComponents";

import {Linkedin, GitHub} from "../../SVG/SVGs";

import HeroStyles from "./hero.module.scss"

export default class Hero extends React.Component {
  render() {
    return (
      <VStack h="70vh">
        <VStack align="start" h="50vh" p="8em 0 0 0">
          <VStack align="start" >
            <p className={Text.heroTitle}>Seth Climenhaga</p>
            <p className={Text.heroSubTitle} >Software Developer</p>
          </VStack>
          <VStack align="start" w="80%" m="20px 0 0 0 " paddingBottom={5}>
            <p className={Text.small}>
              I'm a software developer who specializes in application development targeting web, mobile, and desktop platforms.
              My work experience includes the distributed cloud solutions, web/mobile technologies, and game development (Unity, OpenGL).
            </p>
            <HStack m="20px 0 0 0 ">      
              <a
                className={HeroStyles.floatingLinks}
                href="https://www.linkedin.com/in/seth-climenhaga-932802157/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin 
                  className={HeroStyles.floatingItem}
                ></Linkedin>
              </a>
              <a
                className={HeroStyles.floatingLinks}
                href="https://github.com/sethclim"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHub 
                  className={HeroStyles.floatingItem}
                ></GitHub>
              </a>
            </HStack>
          </VStack>
        </VStack>
        <p>{this.title}</p>
      </VStack>
    );
  }
}

