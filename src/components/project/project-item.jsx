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
      <HStack w="100%" m="20px 0" h="12em"  bg="#A6A6A633" className={styles.gridItem}>  
            <VStack w="50%" alignItems="start" p="15px">
              <HStack w="100%">
                <p className={Text.medium} style={{color : TitleColor, width: "100%"}}>{title}</p>
                <div className={styles.techWrap}>
                  {
                    tech.map((item, i) => {
                      return (
                        <GridItem key={i} justifyContent="center" alignItems="center" p="0px 20px !important" >
                          <VStack>
                            {
                              logos[item] != null ?   
                              (<img src={"svg/" + logos[item]} height="30px" width="30px" style={{padding: "5px"}} /> ) 
                              :
                              (<p key={item} className={styles.techLabel}>{item}</p>)
                            }
                          </VStack>
                        </GridItem>
                      ) 
                    })
                  }
                </div>
              </HStack>
                <p  className={Text.small} >{desc}</p>
                
                <a href={gitLink}>
                    <GitHub className={styles.github} />
                </a>
            </VStack>
            <VStack  h="100%" w="50%" justifyContent="center" alignItems="flex-end">
              <img src={bkImage} style={{"height" : "100%", width:"auto"}} />
            </VStack>

        </HStack>
    )
  }

  export default ProjectItem;