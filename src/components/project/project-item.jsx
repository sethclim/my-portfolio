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

 const ProjectItem = ({image, desc, tech, title, gitLink, bkImage, TitleColor}) =>{
    const [isOpen, setIsOpen] = useState(false);

    const[uniColors, setUniColors] = useState([]);

    // const { controlCursor, onCursor  } = context;

    const bkColor="#ff0000"
    const bgSize=400
    const bkPostion="center"
  
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
      <div div={{width:'100%', height:'6em', backgroundColor:"#ff0000"}} className={styles.gridItem}>  
          
        <div style={{width: '100%', height: '100%', backgroundImage: `url(${bkImage})`, backgroundSize: bgSize, backgroundRepeat:"no-repeat", backgroundPosition:bkPostion }}>
          <VStack alignItems="start" p="0 0 0 10px"  >
            <p className={Text.medium} style={{color : TitleColor}}>{title}</p>
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
              <p  className={Text.small} >{desc}</p>
              
              <a href={gitLink}>
                  <GitHub className={styles.github} />
              </a>
            </div>
          </VStack>
        </div>

        {/* <Modal handleClose={toggleModal} isOpen={isOpen}>
          <HStack className={styles.content} p="2em" w="100%">
            <img className={styles.vertImg}  src={image} />
            <VStack className={styles.infoWrapper} alignItems="start" justifyContent="center" w="50%" h="20em" >
              <p  className={Text.Title}>{title}</p>   
               
 
            </VStack>
            <div className={styles.horImg} style={{width: '50%'}} >
              <img  src={image} />
            </div>
          </HStack>
        </Modal>       */}
      </div>
    )
  }

  export default withCursor(ProjectItem);