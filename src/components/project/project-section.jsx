
//Components
import ProjectItem from "./project-item"
import styles from "./projectsession.module.scss"
import { VStack } from "../LayoutComponents";


//Styles
import Text from "../../styles/text.module.scss"


const ProjectPage = ({data}) => {

  return (
    <div id="projects">
        <p className={Text.Title}>Projects</p>
        <VStack gap={5} id={styles.projectContainer}>
        {
          data[0].default.map((item, i) => {
            return (
              <ProjectItem 
                key={i}
                id="pi" 
                title={item.title} 
                image={item.image}
                bkImage={item.bkImage}
                tech={item.tech}
                desc={item.desc} 
                gitLink={item.gitLink}  />
            ) 
          })
        }
        </VStack>   
      </div>
  );
}
export default ProjectPage;
