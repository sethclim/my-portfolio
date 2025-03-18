
//Components
import ProjectItem from "./project-item"
import styles from "./projectsession.module.scss"
import { VStack } from "../LayoutComponents";


//Styles
import Text from "../../styles/text.module.scss"
import Modal from "../modal/modal";
import { useState } from "react";


const ProjectPage = ({data}) => {

  const [modelOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)


  const handleClose = () => {
    setModalOpen(false)
  }

  const openModal = (i) => {
    setModalIndex(i)
    setModalOpen(true)
  }

  return (
    <div id="projects">
        <p className={Text.Title}>Top Projects</p>
        <div gap={20} className={styles.projectContainer}>
        {
          data['../data/projects.json'].map((item, i) => {
            return (
              <ProjectItem 
                key={i}
                id="pi" 
                title={item.title} 
                image={item.image}
                bkImage={item.bkImage}
                tech={item.tech}
                desc={item.desc} 
                gitLink={item.gitLink}
                TitleColor="white"
                onClick={() => openModal(i)}  />
            ) 
          })
        }
        </div>   
        <Modal isOpen={modelOpen} handleClose={handleClose} >
          <div>
            <div>
              <h3>{data['../data/projects.json'][modalIndex].title}</h3>
            </div>
            <div>

            </div>
          </div>
        </Modal>
      </div>
  );
}

export default ProjectPage;
