import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
import "./fonts/woff2/JetBrainsMono-Italic.woff2";
import "./fonts/woff2/JetBrainsMono-Regular.woff2";
import "./fonts/Bebas_Neue/BebasNeue-Regular.ttf";
import "./fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf";
import "./fonts/IBM_Plex_Sans/IBMPlexSans-ExtraLightItalic.ttf";
import "./fonts/IBM_Plex_Sans/IBMPlexSans-Light.ttf";

import Header from "./Components/Header";
import { Section } from "./Components/Section";
import Footer from "./Components/Footer";
import FrontPage from "./Components/Sections/FrontPage";
import About from "./Components/Sections/About";
import Projects from "./Components/Sections/project/project-section";
import Contact from "./Components/Sections/Contact";
import FloatingLinks from "./Components/FloatingLinks";
import UpArrow from "./Components/SVG/uparrow";

import {extendTheme, ChakraProvider, Box } from '@chakra-ui/react'

import {Link} from "./Components/Chakra/Link.ts"
import {Button} from "./Components/Chakra/Button.ts"
import {Text} from "./Components/Chakra/Text.ts"

const colors = {
  brand: {
    "primary": "#6c82fb",
    "background":'#0b1a2e',
    "red":'red',
    'lightGrey':'#ccd7f5',
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}



const theme = extendTheme({ 
  colors ,
  components: {
    Link,
    Button,
    Text
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#0b1a2e',
        color: '#8893af',
      },
      // styles for the `a`
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box className="App">
          <Header />
          <FloatingLinks></FloatingLinks>
          <UpArrow className="uparrow"></UpArrow>
          <Section
            title="Projects"
            subtitle={"Hi there"}
            dark={true}
            id="front-page"
            component={FrontPage}
          />
          <Section
            title="Projects"
            subtitle={"Hi there"}
            dark={true}
            id="Projects"
            component={Projects}
          />
          <Section
            title="Projects"
            subtitle={"Hi there"}
            dark={true}
            id="About"
            component={About}
          />
          {/* <Section
            title="Projects"
            subtitle={"Hi there"}
            dark={true}
            id="Contact"
            component={Contact}
          /> */}
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
