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
import FloatingLinks from "./Components/floating-links/FloatingLinks";


import {extendTheme, ChakraProvider } from '@chakra-ui/react'
import CursorProvider from "./Providers/cursorProvider";

import {Link} from "./Components/Chakra/Link.ts"
import {Button} from "./Components/Chakra/Button.ts"
import {Text} from "./Components/Chakra/Text.ts"

import  "./App.css"

const colors = {
  brand: {
    "primary": "#9450F2",
    'dark':'#262626',
    'white': '#F2F2F2',
    '2':'#A6A6A6'

  },
}

export const theme = extendTheme({ 
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
        bg: 'brand.white',
        color: 'brand.dark',
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
       <CursorProvider>
        <Router>
            <Header />
            <FloatingLinks></FloatingLinks>
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
            <Footer />  
        </Router>
      </CursorProvider>
    </ChakraProvider>
  );
}

export default App;
