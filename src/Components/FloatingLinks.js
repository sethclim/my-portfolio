import React from "react";
import Linkedin from "./SVG/linkedin";
import GitHub from "./SVG/github";
class FloatingLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="link-wrapper">
        <a
          className="floating-links"
          href="https://www.linkedin.com/in/seth-climenhaga-932802157/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className="floating-item"></Linkedin>
        </a>

        <a
          className="floating-links"
          href="https://github.com/sethclim?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub className="floating-item"></GitHub>
        </a>
      </div>
    );
  }
}

export default FloatingLinks;
