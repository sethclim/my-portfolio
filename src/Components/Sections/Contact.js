import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-container">
          <div className="proj-title-container">
            {/* <h2 className="proj-pg-num">01.</h2> */}
            <div className="proj-pg-title">
              <h2>Contact</h2>
            </div>
            <hr class="new4"></hr>
          </div>
          <div className="email-button-container">
            <div className="email-button">
              <a href="mailto:sethclim@gmail.com">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
