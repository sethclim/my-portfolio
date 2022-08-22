
//Components
import ProjectItem from "./project-item"
import styles from "./projectsession.module.scss"
import CursorProvider from "../HOCs/cursorProvider";
import { Grid } from "../LayoutComponents";


//Styles
import Text from "../../styles/text.module.scss"


const ProjectPage = () => {
  return (
    <CursorProvider>
      <div id="projects">
        <p className={Text.Title}>Projects</p>
        <Grid templateColumns='repeat(2, 1fr)' gap={5} id={styles.projectContainer} >
          <ProjectItem 
            id="pi"
            title="Scales App" 
            image="/imgs/IPhone_X_vector_scalesapp2.svg"
            bkImage="/imgs/figma_screenshot.png"
            hoverColor="black"
            textHover='white'
            bkColor="#FFFFFF"
            tech={["Android", "Kotlin", "KotlinMultiPlatform", "Koin", "SQLLite"]}
            desc="The goal of the app is to help a musician with their practice routine by providing selected exercises in a randomized order. 
            Created a multi-page app that passes data between activities, saved data in user preferences, and using libraries to hold business logic.  
            Includes the ability to generate custom practice routines based on user inputs." 
            gitLink="https://rebrand.ly/scalesapp"  />

          <ProjectItem 
            id="pi"
            title="Illu"
            image="/imgs/IlluHome.png"
            bkImage="/imgs/IlluHome.png"
            TitleColor="#FFFFFF"
            bkPostion="right"
            bkColor="#01011a"
            hoverColor="white"
            textHover='black'
            tech={["Unity", "C#", "UWP"]}
            desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
            As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
            gitLink="https://rebrand.ly/illu_game" />

          <ProjectItem 
                id="pi"
            title="Venus Bug Tracker"
            image="/imgs/venus_board.png"
            bkImage="/imgs/venus_board.png"
            TitleColor="#000000"
            bkPostion="right"
            hoverColor="black"
            textHover='white'
            bgSize={300}
            bkColor="#ecf0f1"
            tech={["Unity", "C#", "UWP"]}
            desc="ChessGame made in unity for the UWP framework.  I implemented and learned about game logic with an object-oriented design, lighting, saving to a binary file.  
            As well as, saving player preferences, and UI in unity.  I used Visual Studio for scripting and debugging, and the project was managed with version control."
            gitLink="https://github.com/simeonis/Venus" />  

          <ProjectItem 
            id="pi"
            title="ChessGame"
            image="/imgs/10-a-game-designer.jpg"
            TitleColor="#FFFFFF"
            bkImage="/imgs/10-a-game-designer.jpg"
            bgSize={200}Z
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
            image="/imgs/Spotify.png"
            bkImage="/imgs/Spotify.png"
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
    </CursorProvider>
  );
}
export default ProjectPage;
