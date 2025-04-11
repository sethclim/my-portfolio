import React from "react";
// import { Link } from "react-scroll";

import Text from '../../../styles/text.module.scss'

import Copy from "../../copy/Copy";


import { HStack, VStack } from "../../LayoutComponents";

import {Linkedin, GitHub} from "../../SVG/SVGs";

import HeroStyles from "./hero.module.scss"

export default class Hero extends React.Component {
  render() {
    return (
      <VStack h="50vh">
        <VStack align="start" h="50vh" p="8em 0 0 0">
          <VStack align="start" >
            <p className={Text.heroTitle}>Seth Climenhaga</p>
            <p className={Text.heroSubTitle} >Software Developer</p>
            <div className="flex flex-row items-end">
              <svg className={HeroStyles.locationPin} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
              </svg>
              <p className={Text.location} >Waterloo ON, Canada</p>
            </div>
          </VStack>
          <VStack align="start" w="80%" m="20px 0 0 0 " paddingBottom={5}>
            <p className={Text.small}>
            I’m a software developer specializing in cross-platform applications for web, mobile, and desktop. I’ve worked on distributed cloud systems, graphics engines (Vulkan/OpenGL), and game development with Unity. In my spare time, I build audio plugins and experiment with path tracers.
            </p>
            <HStack m="20px 0 0 0 " alignItems="center">      
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

