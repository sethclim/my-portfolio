import React from "react";
import {Linkedin, GitHub} from "../SVG/SVGs";

import styles from "./floating-links.module.scss"


export default class FloatingLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.linkWrapper}>
        <a
          className={styles.floatingLinks}
          href="https://www.linkedin.com/in/sethclim/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className={styles.floatingItem}></Linkedin>
        </a>

        <a
          className={styles.floatingLinks}
          href="https://github.com/sethclim"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub className={styles.floatingItem}></GitHub>
        </a>
      </div>
    );
  }
}
