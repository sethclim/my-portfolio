import { useState} from "react";


//Components
import withCursor from "../HOCs/withCursor";
import Modal from "../modal/modal";
import {GitHub} from "../SVG/SVGs";
import { GridItem } from "../LayoutComponents";
import { VStack, HStack } from "../LayoutComponents";

//Styles
import Text from "../../styles/text.module.scss"
import styles from "./projectsession.module.scss"



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
        w='100%' 
        h='6em'   
        bg={bkColor}  
        onClick={toggleModal}
        onMouseOver={() => onCursor('pointer', hoverColor, textHover)}
        onMouseLeave={onCursor}
        className={styles.gridItem}
        >  
          
        <div style={{width: '100%', height: '100%', backgroundImage: `url(${bkImage})`, backgroundSize: bgSize, backgroundRepeat:"no-repeat", backgroundPosition:bkPostion }}>
          <VStack alignItems="start" p="0 0 0 10px"  >
            <p className={Text.medium} style={{color : TitleColor}}>{title}</p>
          </VStack>
        </div>

        <Modal handleClose={toggleModal} isOpen={isOpen}>
          <HStack p="2em">
            <VStack alignItems="start" justifyContent="center" w="50%" h="20em" >
              <p  className={Text.Title}>{title}</p>   
                <HStack alignItems="center" w="2em">
                  {
                    tech.map(item => {
                      return <p key={item} className={Text.small} style={{margin: "0 10px 0 0"}}>{item}</p>
                    })
                    
                  }
                </HStack>
              <p  className={Text.small} >{desc}</p>

              <a href={gitLink}>
                  <GitHub className={styles.github} />
              </a>
            </VStack>
            <div style={{width: '50%'}} >
              <img style={{height:"20em", width:"100%", objectFit:"contain"}}  src={image} />
            </div>
          </HStack>
        </Modal>      
      </GridItem>
    )
  }

  export default withCursor(ProjectItem);