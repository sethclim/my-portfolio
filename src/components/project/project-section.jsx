
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
            <div className="flex flex-row w-full bg-blue p-4">
              <div className="flex flex-col justify-center  grow w-50 bg-amber h-full overflow-hidden gap-2">
              <h3 className="text-xl font-bold">{modalData?.title}</h3>
                <div className="flex flex-row gap-4 border-t-1 border-b-1 border-gray-500 bg-amber">
                {
                  modalData?.tech.map((item, i) => {
                    return (
                      <p key={i} className="text-black text-xs font-bold  text-center mt-2 mb-2">{item}</p>
                    ) 
                  })
                }
                </div>
                <p className="text-xs">{modalData?.desc}</p>
                <div className="flex flex-row">
                  {
                    modalData?.gitLink !== undefined ?
                    (
                      <a  href={modalData?.gitLink} target="_blank"  rel="noopener noreferrer" >
                          <GitHub className="bg-zinc-50 text-black-500 hover:text-zinc-400" />
                      </a>
                    ): null
                    
                  }
                </div>
              </div>
              {
                modalData?.image !== "" ? (
                  <div className="flex justify-center grow w-50 bg-red h-full p-4">
                    <img src={modalData?.image} className="h-80" />
                  </div>
                ): null
              }
            </div>

        </Modal>  
      </div>
  );
}

export default ProjectPage;
