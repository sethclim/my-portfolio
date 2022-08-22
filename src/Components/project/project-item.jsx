import React, {useContext, useState} from "react";
import withCursor from "../HOCs/withCursor";
import Modal from "../modal/modal";
import styles from "./projectsession.module.scss"


import GitHub from "../SVG/github";

import { GridItem } from "../LayoutComponents";

import { VStack, HStack } from "../LayoutComponents";

import Text from "../../styles/text.module.scss"

import { CursorContext } from "../HOCs/cursorProvider";


 const ProjectItem = ({context, image, desc, tech, title, gitLink, bkImage, bkColor, bgSize=400, TitleColor, bkPostion="center", hoverColor,textHover}) =>{
    const [isOpen, setIsOpen] = useState(false);

    const { controlCursor, onCursor  } = context;
  
    function toggleModal() {
        
        controlCursor(!isOpen)

        if(isOpen){
          onCursor('false')
        }

        setIsOpen(!isOpen);
    }

    function mouse()
    {
      onCursor('pointer', hoverColor, textHover);
    }
  
    return(   
      
      <GridItem   
        w='150' 
        h='8em'   
        bg={bkColor}  
        onClick={toggleModal}
        onMouseOver={mouse}
        onMouseLeave={onCursor}
        className={styles.gridItem}
        >  
          
        <div style={{width: '100%', height: '100%', backgroundImage: `url(${bkImage})`, backgroundSize: bgSize, backgroundRepeat:"no-repeat", backgroundPosition:bkPostion }}>
          <VStack alignItems="start"   >
            <p className={Text.subTitle} style={{color : TitleColor}}>{title}</p>
          </VStack>
        </div>

        <Modal handleClose={toggleModal} isOpen={isOpen}>
          <HStack>
            <VStack alignItems="start" justifyContent="center" w="50%" h="20em" p="0 2em">
              <p  className={Text.subTitle}>{title}</p> 
              <p  className={Text.small} >{desc}</p>
              <HStack>
                <p  className={Text.highLight}>Tech Stack</p>
                {
                  tech.map(item => {
                    return <HStack alignItems="center" w="2em"><p style={{margin: 0}}>{item}</p></HStack>
                  })
                }
               </HStack>

              <a href={gitLink} isExternal >
                  <GitHub className={styles.github} />
              </a>
              
            </VStack>
            <VStack h="20em" w="50%" justifyContent="center" alignItems="center" >
              <img style={{height:"100%", width:"100%", objectFit:"contain"}}  src={image} />
            </VStack>
          </HStack>
        </Modal>      
      </GridItem>
    )
  }

  export default withCursor(ProjectItem);