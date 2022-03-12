import React from "react";
import { Project } from "./project";
import chessIMG from "../../imgs/10-a-game-designer.jpg";
import PhotoFolio from "../../imgs/Photofolio.png";
import SmartScales from "../../imgs/SmartScales.png";
import Spotify from "../../imgs/Spotify.png";
import ScalesApp2 from "../../imgs/IPhone_X_vector_scalesapp.svg";
import ScalesApp22 from "../../imgs/IPhone_X_vector_scalesapp2.svg";

import { Flex, Spacer, Container, HStack, VStack, Text, Image } from '@chakra-ui/react'

const ProjectPage = () => {
    return (
      <div className="project">
        <div className="project-container">
          <div className="proj-title-container">
            <div className="proj-pg-title">
     
            </div>

            <Container  maxW='container.lg' paddingBottom="10">
              <Text fontSize="2xl">Projects</Text>
              <hr className="new4"></hr>
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
          <Project
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
          />
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
