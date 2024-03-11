//Components
import {GitHub} from "../SVG/SVGs";
import { Grid, GridItem } from "../LayoutComponents";
import { VStack, HStack } from "../LayoutComponents";

//Styles
import Text from "../../styles/text.module.scss"
import styles from "./projectsession.module.scss"

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

    return(   
      <HStack w="100%" m="10px 0" h="9em"  bg="#222" className={styles.gridItem}>  
            <VStack w="100%" alignItems="start" p="15px">
              <VStack w="100%">
                <p className={Text.medium} style={{color : TitleColor, width: "100%", "margin": "0 8px 0 0"}}>{title}</p>
                <div className={styles.techWrap}>
                  {
                    tech.map((item, i) => {
                      return (
                          <p key={i} className={styles.techLabel}>{item}</p>
                      ) 
                    })
                  }
                </div>
              </VStack>
                <p  className={Text.small} >{desc}</p>
                
                <a href={gitLink}>
                    <GitHub className={styles.github} />
                </a>
            </VStack>
            {/* <VStack  h="100%" w="50%" justifyContent="center" alignItems="flex-end">
              <img src={bkImage} style={{"height" : "100%", width:"auto"}} />
            </VStack> */}

        </HStack>
    )
  }

  export default ProjectItem;