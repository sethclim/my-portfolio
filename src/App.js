import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
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
import Projects from "./Components/Sections/Project";
import Contact from "./Components/Sections/Contact";
import FloatingLinks from "./Components/FloatingLinks";
import UpArrow from "./Components/SVG/uparrow";

function App() {
  return (
    <Router>
      <div className="App">
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
        <Section
          title="Projects"
          subtitle={"Hi there"}
          dark={true}
          id="Contact"
          component={Contact}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
