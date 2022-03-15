import React, {useState} from "react";
import { Project } from "./project";
import chessIMG from "../../imgs/10-a-game-designer.jpg";
import PhotoFolio from "../../imgs/Photofolio.png";
import SmartScales from "../../imgs/SmartScales.png";
import Spotify from "../../imgs/Spotify.png";
import ScalesApp2 from "../../imgs/IPhone_X_vector_scalesapp.svg";
import ScalesApp22 from "../../imgs/IPhone_X_vector_scalesapp2.svg";

import { Flex,  Container, Grid, GridItem, Text, Image, useDisclosure, ModalOverlay,ModalCloseButton,ModalContent,ModalBody,ModalFooter,Button, HStack, VStack } from '@chakra-ui/react'


import Modal from "../modal/modal";

const ProjectItem = () =>{
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);

    if(!isOpen){
      setIsShown(false)
    }
  }


  return(
 
    <GridItem w='150' h='150' bg={!isShown? "blue" : "red" } onClick={toggleModal} onMouseEnter={() => setIsShown(true)}

    onMouseLeave={() => setIsShown(false)} >

        <Modal handleClose={toggleModal} isOpen={isOpen}>
          <Text fontSize={80} color="white">
            Hello
          </Text>
        </Modal>
       {/* <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent w="50em">
          <ModalCloseButton />
          <ModalBody mt="50px">

          <HStack  h="100%">
            <VStack alignItems="start" w="50%" h="30em">
              <Text>Scales App</Text> 
              <Text>THis is the scales app</Text>

            </VStack>

            <VStack h="30em" w="50%">
              <Image src={ScalesApp22} />
            </VStack>
            
          </HStack>
      
          </ModalBody>
        </ModalContent>
      </Modal> */}
      
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
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />


              </Grid>





            </Container>
          </div>



        


          {/* <ProjectR
            title="ChessGame"
            img={chessIMG}
            desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
            tech={["Unity", "C#", "UWP"]}
            gitLink="https://bitbucket.org/sethclim/chess_game/src/master/"
            link={false}
            projectLink="www.dfgio0erg.com"
          /> */}
          {/* <Project
            title="Scales App"
            img={ScalesApp22}
            desc="The goal of the app is to help a musician with their practice routine by providing selected exercises in a randomized order. Created a multi-page app that passes data between activities, saved data in user preferences, and using libraries to hold business logic.  Includes the ability to generate custom practice routines based on user inputs."
            tech={["Android", "Kotlin"]}
            gitLink="https://bitbucket.org/sethclim/scales_app_android/src/master/"
            link={false}
            projectLink="www.dfgio0erg.com"
          />
          <Project
            title="Spotify Mini-Player"
            img={Spotify}
            desc="Built with the React framework and Electron.  This project calls endpoints in the Spotify API and uses the PCKE Authorization flow.  The project also implementes a dynamic dropdown menu and makes use of react context."
            tech={["React.JS", "Electron", "JavaScript", "Axios"]}
            gitLink="https://bitbucket.org/sethclim/spotify_mini_player/src/master/"
            link={false}
            projectLink="https://bitbucket.org/sethclim/spotify_mini_player/src/master/"
          /> */}
          {/* <ProjectL
            title="Photography Portfolio"
            img={PhotoFolio}
            desc="A React Website for a photographer.  Includes a sliding gallery using react and jQuery, as well as interactive controls for viewing."
            tech={["React.JS", "JQuery", "JavaScript"]}
            gitLink="https://bitbucket.org/sethclim/photography_portfolio/src/master/"
            link={false}
            projectLink="www.dfgio0erg.com"
          /> */}
        </div>
      </div>
    );
}
export default ProjectPage;
