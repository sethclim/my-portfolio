import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-container">
          <div className="proj-title-container">
            {/* <h2 className="proj-pg-num">01.</h2> */}
            <div className="proj-pg-title">
              <h2>About</h2>
            </div>
            <hr class="new4"></hr>
          </div>
          <div className="content-container">
            <div className="about-me">
              <h2>Bio</h2>
              <div className="about-me-para">
                <p>
                  I'm a computer science student with a passion for business and
                  software development. I'm experienced in object-oriented
                  programming including design with UML. Currently, I've built
                  applications for web, android, iOS, and desktop platform. In
                  addition to my Computer Science degree, I have a Bachelor of
                  Music during which I took electives in accounting and
                  business.
                </p>
              </div>
            </div>
            <div>
              <div className="skills"></div>
              <h2 className="skills-title">Skills</h2>
              <div className="skills-list">
                <ul className="skill-listOne">
                  <li>Python</li>
                  <li>C#</li>
                  <li>.Net</li>
                  <li>XAML</li>
                </ul>
                <ul className="skill-listOne">
                  <li>SQL</li>
                  <li>React.JS</li>
                  <li>HTML & CSS</li>
                  <li>WordPress</li>
                </ul>
                <ul className="skill-listThree">
                  <li>Java</li>
                  <li>Kotlin</li>
                  <li>Visual Studio</li>
                  <li>Git & Version Control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
