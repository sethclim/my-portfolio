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

 const ProjectItem = ({image, desc, tech, title, gitLink, bkImage, TitleColor, onClick}) =>{

    const handleClick = (event) => {
        event.stopPropagation(); // Stops the event from bubbling up
        // event.preventDefault(); // Prevents the default link navigation (optional)
        // console.log("Anchor tag clicked!");
    }

    const onClickHandler = () => {
      event.stopPropagation();
      console.log("Button clicked!");
      onClick()
    }

    return(   
      <button className={styles.noButton} onClick={onClickHandler}>
        <HStack w="100%" h="100%" m="10px 0"  className={styles.gridItem}>  
              <VStack w="100%" alignItems="start" p="15px" gap={3}>
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
                  
                  {/* {
                    gitLink !== undefined ? (
                      <a href={gitLink}  onClick={handleClick}  target="_blank"  rel="noopener noreferrer" >
                        <GitHub className={styles.github} />
                      </a>
                    ) : null
                  } */}

              </VStack>
          </HStack>
      </button>
    )
  }

  export default ProjectItem;