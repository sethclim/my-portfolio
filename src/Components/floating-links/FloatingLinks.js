import React from "react";
import Linkedin from "../SVG/linkedin";
import GitHub from "../SVG/github";

import styles from "./floating-links.module.scss"


class FloatingLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.linkWrapper}>
        <a
          className={styles.floatingLinks}
          href="https://www.linkedin.com/in/seth-climenhaga-932802157/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className={styles.floatingItem}></Linkedin>
        </a>

        <a
          className={styles.floatingLinks}
          href="https://github.com/sethclim?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub className={styles.floatingItem}></GitHub>
        </a>
      </div>
    );
  }
}

export default FloatingLinks;
