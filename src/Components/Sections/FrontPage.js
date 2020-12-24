import React from "react";
import { Link } from "react-scroll";

class FrontPage extends React.Component {
  render() {
    return (
      <div className="front-page">
        <div className="title-block">
          <div className="opening">
            <h4>Hi, my name is</h4>
          </div>
          <div className="bb-name">
            <h1>Seth Climenhaga</h1>
          </div>
          <div className="sm-subtitle">
            <h1>I build mobile and web applications</h1>
          </div>
          <div className="title-desc">
            <p>
              I'm a computer science student who specializes in web applications
              and mobile development on both android and iOS.
            </p>
          </div>
          <div className="projects-button">
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </div>

        <p>{this.title}</p>
      </div>
    );
  }
}
export default FrontPage;
