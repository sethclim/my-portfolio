import React from "react";
// import Resume from "../../../public/Resume.pdf";
/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 0.95,
        color: "white",
        transition: "height 0.3s ease",
        zIndex: 2,
      },
      menuList: {
        paddingTop: "3rem",
      },
      containerB: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: "0.4s",
      },
      menuItem: {
        fontSize: "3rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "#6c82fb" : "white",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: "0.4s",
        background: "black",
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: "0.4s",
      },
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>
            {this.props.children}
            <div style={styles.containerB}>
              <div style={styles.menuItem}>
                {/* <a
                  className="resume-link-menu"
                  href={Resume}
                  rel="noopener noreferrer"
                  target="_blank"
                  trailingIcon="picture_as_pdf"
                >
                  <p>Resume</p>
                </a> */}
              </div>
              <div style={styles.line} />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;
