import React from "react";
import Bitbucket from "../bitbucket";
import External from "../external";

function ProjectL(props) {
  return (
    <div className="projR-wrap">
      <div className="proj-left">
        <div className="proj-desc-container">
          <div className="proj-title">
            <h1>{props.title}</h1>
          </div>
          <div className="proj-desc">
            <p>{props.desc}</p>
          </div>
          <div className="proj-tech">
            <ul>
              <li>{props.tech[0]}</li>
              <li>{props.tech[1]}</li>
              <li>{props.tech[2]}</li>
            </ul>
          </div>
          <div className="project-links-container">
            <a
              className="projectLinks1"
              href={props.gitLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Bitbucket className="github" />
            </a>
            <div className="projectLinks2">
              {props.link && <External className="external" />}
            </div>
          </div>
        </div>
      </div>
      <div className="proj-right">
        <div className="proj-img-container">
          <img className="proj-img" src={props.img} alt="img" />
          <div className="rect"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectL;
