import React, {useState} from "react";

import chessIMG from "../../../imgs/10-a-game-designer.jpg";
import PhotoFolio from "../../../imgs/Photofolio.png";
import SmartScales from "../../../imgs/SmartScales.png";
import Spotify from "../../../imgs/Spotify.png";
import ScalesApp2 from "../../../imgs/IPhone_X_vector_scalesapp.svg";
import ScalesApp22 from "../../../imgs/IPhone_X_vector_scalesapp2.svg";
import Bitbucket from "../../SVG/bitbucket";

import Modal from "../../modal/modal";

import styles from "./projectsession.module.scss"

import { Flex,  Container, Grid, GridItem, Text, Image, Button, HStack, VStack, Link } from '@chakra-ui/react'

const ProjectItem = ({image, desc, tech, title, gitLink}) =>{
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);

    if(!isOpen){
      setIsShown(false)
    }
  }

  return(
 
    <GridItem w='150' h='150' bg={!isShown? "#FFFFF522" : "#FFFFF533" } onClick={toggleModal} onMouseEnter={() => setIsShown(true)}

    onMouseLeave={() => setIsShown(false)} >
        <VStack alignItems="start">
          <Text padding="2">{title}</Text>
        </VStack>

        <Modal handleClose={toggleModal} isOpen={isOpen}>
          <HStack>
            <VStack alignItems="start" justifyContent="start" w="50%" h="500px" pt={5} padding={20}>
              <Text fontSize={30}>{title}</Text> 
              <Text>{desc}</Text>
              <HStack pt={4}>
                <Text bg="black" color="white" padding={1} borderRadius={5}>Tech Stack</Text>
                {
                  tech.map(item => {
                    return <Text>{item}</Text>
                  })
                }
              </HStack>

              <Link href={gitLink} isExternal pt={4}>
                 <Bitbucket className={styles.github} />
              </Link>
             
            </VStack>
            <VStack h="100%" w="50%">
              <Image boxSize='500px' objectFit='contain' src={image} />
            </VStack>
          </HStack>
        </Modal>      
    </GridItem>
  )
}

const ProjectPage = () => {
    return (
      <div className="project">
        <div className="project-container">
          <div className="proj-title-container">
            <div className="proj-pg-title">
     
            </div>

            <Container  maxW='container.lg' paddingBottom="10">
              <Text color="white" fontSize={50}>Projects</Text>

              <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <ProjectItem 
                  title="Scales App" 
                  image={ScalesApp22}
                  tech={["Android", "Kotlin"]}
                  desc="The goal of the app is to help a musician with their practice routine by providing selected exercises in a randomized order. 
                  Created a multi-page app that passes data between activities, saved data in user preferences, and using libraries to hold business logic.  
                  Includes the ability to generate custom practice routines based on user inputs." 
                  gitLink="https://bitbucket.org/sethclim/scales_app_android/src/master/"  />

                <ProjectItem 
                  title="Illu"
                  image={chessIMG}
                  tech={["Unity", "C#", "UWP"]}
                  desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
                  As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
                  gitLink="https://bitbucket.org/sethclim/chess_game/src/master/" />

                <ProjectItem 
                  title="Venus Bug Tracker"
                  image={chessIMG}
                  tech={["Unity", "C#", "UWP"]}
                  desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
                  As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
                  gitLink="https://bitbucket.org/sethclim/chess_game/src/master/" />  

                <ProjectItem 
                  title="ChessGame"
                  image={chessIMG}
                  tech={["Unity", "C#", "UWP"]}
                  desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
                  As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
                  gitLink="https://bitbucket.org/sethclim/chess_game/src/master/" />

                <ProjectItem
                  title="Spotify Mini-Player"
                  image={Spotify}
                  desc="Built with the React framework and Electron.  This project calls endpoints in the Spotify API and uses the PCKE Authorization flow.  
                  The project also implementes a dynamic dropdown menu and makes use of react context."
                  tech={["React.JS", "Electron", "JavaScript", "Axios"]}
                  gitLink="https://bitbucket.org/sethclim/spotify_mini_player/src/master/" />

              </Grid>
            </Container>
          </div>
        </div>
      </div>
    );
}
export default ProjectPage;
