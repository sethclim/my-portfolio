import React from "react";

import chessIMG from "../../../imgs/10-a-game-designer.jpg";
import Spotify from "../../../imgs/Spotify.png";
import ScalesApp22 from "../../../imgs/IPhone_X_vector_scalesapp2.svg";
import fig from "../../../imgs/figma_screenshot.png";
import Venus_Board from "../../../imgs/venus_board.png";

import { Container, Grid, Text } from '@chakra-ui/react'

import ProjectItem from "./project-item"

import styles from "./projectsession.module.scss"

const ProjectPage = ({context}) => {




  return (
    <Container  maxW='container.lg' paddingBottom="10">
        {/* {
          isShown? <div id={styles.invertedcursor}><p>Open</p></div> : null
        } */}
      <div>
   
      <Text color="brand.dark" fontSize={50}>Projects</Text>

      <Grid templateColumns='repeat(2, 1fr)' gap={5} id={styles.projectContainer} >
        <ProjectItem 
          id="pi"
          title="Scales App" 
          image={ScalesApp22}
          bkImage={fig}
          hoverColor="black"
          textHover='white'
          bkColor="#FFFFFF"
          tech={["Android", "Kotlin", "KotlinMultiPlatform", "Koin", "SQLLite"]}
          desc="The goal of the app is to help a musician with their practice routine by providing selected exercises in a randomized order. 
          Created a multi-page app that passes data between activities, saved data in user preferences, and using libraries to hold business logic.  
          Includes the ability to generate custom practice routines based on user inputs." 
          gitLink="https://bitbucket.org/sethclim/scales_app_android/src/master/"  />

        <ProjectItem 
               id="pi"
          title="Illu"
          //image={chessIMG}
          // bkImage={chessIMG}
          TitleColor="#FFFFFF"
          bkColor="#76ABD2"
          hoverColor="white"
          textHover='black'
          tech={["Unity", "C#", "UWP"]}
          desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
          As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
          gitLink="https://bitbucket.org/sethclim/chess_game/src/master/" />

        <ProjectItem 
               id="pi"
          title="Venus Bug Tracker"
          image={Venus_Board}
          bkImage={Venus_Board}
          TitleColor="#000000"
          bkPostion="right"
          hoverColor="black"
          textHover='white'
          bgSize={300}
          bkColor="#ecf0f1"
          tech={["Unity", "C#", "UWP"]}
          desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
          As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
          gitLink="https://bitbucket.org/sethclim/chess_game/src/master/" />  

        <ProjectItem 
               id="pi"
          title="ChessGame"
          image={chessIMG}
          TitleColor="#FFFFFF"
          bkImage={chessIMG}
          bgSize={200}
          bkColor="#000000"
          hoverColor="white"
          textHover='black'
          tech={["Unity", "C#", "UWP"]}
          desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
          As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
          gitLink="https://bitbucket.org/sethclim/chess_game/src/master/" />

        <ProjectItem
               id="pi"
          title="Spotify Mini-Player"
          image={Spotify}
          bkImage={Spotify}
          bkPostion="right"
          TitleColor="#FFFFFF"
          bgSize={250}
          bkColor="#000000"
          hoverColor="white"
          textHover='black'
          desc="Built with the React framework and Electron.  This project calls endpoints in the Spotify API and uses the PCKE Authorization flow.  
          The project also implementes a dynamic dropdown menu and makes use of react context."
          tech={["React.JS", "Electron", "JavaScript", "Axios"]}
          gitLink="https://bitbucket.org/sethclim/spotify_mini_player/src/master/" />

      </Grid>   
      </div>
    </Container>
  );
}
export default ProjectPage;
