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

const logos = {
  "React" : "react.svg",
  "React Native" : "react.svg",
  "Docker" : "docker.svg",
  "C#" : "c_sharp.svg",
  "Unity" : "unity.svg",
  "Android" : "android.svg",
  "iOS" : "ios.svg",
  ".Net" : ".net.svg",
  "Swift" : "swift.svg",
  "Electron" : "electron.svg",
  "ObjC" : "objc.svg",
  "JavaScript" : "js.svg",
  "Axios" : "axios.svg",
  "Watermelon DB" : "watermelondb.svg",
  "NativeBase" : "nativebase.svg",
  "SQL" : "sql.svg",
  "Postgres" : "postgresql.svg",
  "Canvas" : "html5_canvas.svg",
  "Custom Camera" : null
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
      <div style={{width:'100%', height:'15em', backgroundColor:"#A6A6A633", margin:"8px"}} className={styles.gridItem}>  
          <HStack h="100%">
            <VStack w="50%" alignItems="start" p="0 0 0 10px">
              <p className={Text.medium} style={{color : TitleColor}}>{title}</p>
              <div className={styles.techWrap} >
                {
                  tech.map((item, i) => {
                    console.log(item)
                    console.log("svg/" + logos[item])
                    return (
                      <GridItem key={i} justifyContent="center" alignItems="center" p="0px 20px !important" m="5px">
                        <VStack>
                          {
                            logos[item] != null ?   
                            (<img src={"svg/" + logos[item]} height="25px" width="25px" /> ) 
                            :
                            (<p key={item} className={styles.techLabel} >{item}</p>)
                          }
                          
                        </VStack>
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
            <VStack h="100%" w="50%" justifyContent="center" alignItems="center">
              <img src={bkImage} style={{"height" : "15vh", width:"auto"}} />
            </VStack>
          </HStack>
        </div>
    )
  }

  export default ProjectItem;