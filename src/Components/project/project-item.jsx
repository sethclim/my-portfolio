import { useEffect, useState} from "react";

//Components
import withCursor from "../HOCs/withCursor";
import Modal from "../modal/modal";
import {GitHub} from "../SVG/SVGs";
import { Grid, GridItem } from "../LayoutComponents";
import { VStack, HStack } from "../LayoutComponents";

//Styles
import Text from "../../styles/text.module.scss"
import styles from "./projectsession.module.scss"


const Colors = ["#08003D", "#1A7FA1", "#189994", "#F2B135", "#EB1C59", "#3E8A66", "#8B1CBD", "#F07924"]

const getColor = (numElements) => {

  var colors = [...Colors];

  var custOrder = [];

  for(var i = 0; i < numElements; i++)
  {
    var idx = Math.floor(Math.random() * colors.length);
    var color = colors[idx]
    colors.splice(idx,1)
    custOrder.push(color)
  }
  
  return custOrder;

}

 const ProjectItem = ({context, image, desc, tech, title, gitLink, bkImage, bkColor, bgSize=400, TitleColor, bkPostion="center", hoverColor,textHover}) =>{
    const [isOpen, setIsOpen] = useState(false);

    const[uniColors, setUniColors] = useState([]);

    const { controlCursor, onCursor  } = context;
  
    function toggleModal() {
        
        controlCursor(!isOpen)

        if(isOpen){
          onCursor('false')
        }

        setIsOpen(!isOpen);
    }

    useEffect(()=>{
      setUniColors(getColor(tech.length))
    },[])


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
          <HStack className={styles.content} p="2em" w="100%">
            <img className={styles.vertImg} style={{height:"20em", width:"100%", objectFit:"contain"}}  src={image} />
            <VStack className={styles.infoWrapper} alignItems="start" justifyContent="center" w="50%" h="20em" >
              <p  className={Text.Title}>{title}</p>   
                <div className={styles.techWrap} >
                  {
                    tech.map((item, i) => {
                      return (
                        <GridItem key={i} bg={uniColors[i]}  justifyContent="center" alignItems="center" p="0px 20px !important" m="5px">
                          <p key={item} className={styles.techLabel} >{item}</p>
                        </GridItem>
                      ) 
                    })
                  }
                </div>
              <p  className={Text.small} >{desc}</p>
              
              <a href={gitLink}>
                  <GitHub className={styles.github} />
              </a>
            </VStack>
            <div className={styles.horImg} style={{width: '50%'}} >
              <img style={{height:"20em", width:"100%", objectFit:"contain"}}  src={image} />
            </div>
          </HStack>
        </Modal>      
      </GridItem>
    )
  }

  export default withCursor(ProjectItem);