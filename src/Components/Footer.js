import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer_container">
        <h5>@Seth Climenhaga 2020</h5>
        <nav className="main-links">
          <ul className="main-links-list">
            <li>
              <a href="www.home.com">
                {" "}
                <i className="icon" class="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="www.home.com">
                {" "}
                <i className="icon" class="fa fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="www.home.com">
                <i className="icon" class="fa fa-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
