import React from "react";
import { Link } from "react-scroll";
import Logo from "./SVG/logo";
import MenuButton from "./Menu/MenuButton";
import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";
import Resume from "../imgs/Resume.pdf";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }
  render() {
    const menu = ["Projects", "About", "Contact"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });
    return (
      <div className="main-header">
        <div className="nav-wrapper container">
          <div className="logocontainer">
            <Logo
              fill={"#6c82fb"}
              width={"2em"}
              hieght={"auto"}
              className="logo"
            />
          </div>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
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
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="resume-button"
                  href={Resume}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>Resume</p>
                </a>
              </li>
            </ul>
          </nav>
          <div className="showMenu">
            <div className="menu-containter">
              <MenuButton
                open={this.state.menuOpen}
                onClick={() => this.handleMenuClick()}
                color="white"
              />
            </div>
            <Menu open={this.state.menuOpen}>{menuItems}</Menu>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
