
//Components
import ProjectItem from "./project-item"
import styles from "./projectsession.module.scss"
import { VStack } from "../LayoutComponents";


//Styles
import Text from "../../styles/text.module.scss"
import Modal from "../modal/modal";
import { useState } from "react";

import {GitHub} from "../SVG/SVGs";


const ProjectPage = ({data}) => {

  const [modelOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState()

  const handleClose = () => {
    setModalOpen(false)
  }

  const openModal = (i) => {
    console.log("what")
    console.log(JSON.stringify(data['../data/projects.json'][i]))
    setModalData(data['../data/projects.json'][i])
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
        <Modal isOpen={modelOpen} handleClose={handleClose}>
            <div className={styles.modalContentArea}>
              <div className={styles.modalDescWrap}>
                <h3 className={styles.modalTitle}>{modalData?.title}</h3>
                <div className="flex flex-row gap-4 border-t-1 border-gray-500 bg-amber w-full">
                {
                  modalData?.tech.map((item, i) => {
                    return (
                      <p key={i} className={styles.modalTextLabels}>{item}</p>
                    ) 
                  })
                }
                </div>
                <p className={styles.modalDesc}>{modalData?.desc}</p>
                <div className="flex flex-row">
                  {
                    modalData?.gitLink !== undefined ?
                    (
                      <a  href={modalData?.gitLink} target="_blank"  rel="noopener noreferrer" >
                          <GitHub className={styles.github} />
                      </a>
                    ): null
                    
                  }
                </div>
              </div>
              {
                modalData?.image !== "" ? (
                  <div className={styles.modalImgWrap}>
                    <img src={modalData?.image} className="h-80 object-contain" />
                  </div>
                ): null
              }
            </div>

        </Modal>  
      </div>
  );
}

export default ProjectPage;
