import React from "react";
// import { Link } from "react-scroll";

import Text from '../../../styles/text.module.scss'

import Copy from "../../Copy";


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
            I’m a software developer specializing in cross-platform applications for web, mobile, and desktop. I’ve worked on distributed cloud systems, graphics engines (Vulkan/OpenGL), and game development with Unity. In my spare time, I build audio plugins and experiment with path tracers.
            </p>
            <HStack m="20px 0 0 0 ">      
              <a
                className={HeroStyles.floatingLinks}
                href="https://www.linkedin.com/in/sethclim/"
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
              <Copy />   
            </HStack>
          </VStack>
        </VStack>
        <p>{this.title}</p>
      </VStack>
    );
  }
}

