import React, {useState} from "react";
import withCursor from "../../HOCs/withCursor";
import Modal from "../../modal/modal";
import styles from "./projectsession.module.scss"

import { GridItem, Text, Image, HStack, VStack, Link, Box ,Wrap, WrapItem} from '@chakra-ui/react'
import GitHub from "../../SVG/github";


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
            <VStack alignItems="start" justifyContent="center" w="50%" h="500px" pt={5} pl={10}  overflow='hidden'>
              <Text fontSize={30}>{title}</Text> 
              <Text fontSize={[15,15,15, 16, 20]} maxHeight='25vh'  overflow='hidden' >{desc}</Text>
              <Wrap pt={4}>
                <Text  w='5.5rem' bg="black" color="white" padding={1} borderRadius={5}>Tech Stack</Text>
                {
                  tech.map(item => {
                    return <WrapItem><Text>{item}</Text></WrapItem>
                  })
                }
              </Wrap>

              <Link href={gitLink} isExternal pt={4}>
                  <GitHub className={styles.github} />
              </Link>
              
            </VStack>
            <VStack h="100%" w="50%" >
              <Image boxSize={['100px', '20rem', '500px']} objectFit='contain' src={image} pr='2' />
            </VStack>
          </HStack>
        </Modal>      
      </GridItem>
    )
  }

  export default withCursor(ProjectItem)