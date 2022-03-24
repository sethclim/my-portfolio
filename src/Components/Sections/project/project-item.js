import React, {useState} from "react";
import withCursor from "../../HOCs/withCursor";
import Bitbucket from "../../SVG/bitbucket";
import Modal from "../../modal/modal";
import styles from "./projectsession.module.scss"

import { GridItem, Text, Image, HStack, VStack, Link, Box } from '@chakra-ui/react'


 const ProjectItem = ({context, image, desc, tech, title, gitLink, bkImage, bkColor, bgSize=400, TitleColor, bkPostion="center", hoverColor,textHover}) =>{
    const [isOpen, setIsOpen] = useState(false);

    const { controlCursor, onCursor  } = context;
  
    function toggleModal() {
        controlCursor(!isOpen)
        setIsOpen(!isOpen);
    }
  
    return(       
      <GridItem   
        w='150' 
        h='150' 
        bg={bkColor}  
        onClick={toggleModal}
        onMouseOver={()=>onCursor('pointer', hoverColor, textHover)}
        onMouseLeave={onCursor}
        boxShadow='2xl'
        borderRadius={5}
        >  
          
        <Box w="100%" h="100%" backgroundImage={bkImage}  bgSize={bgSize}   backgroundRepeat="no-repeat"  bgPosition={bkPostion}>
          <VStack alignItems="start"   >
            <Text color={TitleColor} padding="2">{title}</Text>
          </VStack>
        </Box>

        <Modal handleClose={toggleModal} isOpen={isOpen}>
          <HStack>
            <VStack alignItems="start" justifyContent="start" w="50%" h="500px" pt={5} padding={20}>
              <Text fontSize={30}>{title}</Text> 
              <Text>{desc}</Text>
              <HStack pt={4}>
                <Text bg="black" color="white" padding={1} borderRadius={5}>Tech Stack</Text>
                {
                  tech.map(item => {
                    return <Text>{item}</Text>
                  })
                }
              </HStack>

              <Link href={gitLink} isExternal pt={4}>
                  <Bitbucket className={styles.github} />
              </Link>
              
            </VStack>
            <VStack h="100%" w="50%">
              <Image boxSize='500px' objectFit='contain' src={image} />
            </VStack>
          </HStack>
        </Modal>      
      </GridItem>
    )
  }

  export default withCursor(ProjectItem)