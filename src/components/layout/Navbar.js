import { Container, Navbar, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { useState, useEffect } from "react";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

import Logo from "../../img/Logo.svg";

import styles from "./NavBar.module.css";

export const NavigationBar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        expand="lg"
        variant="dark"
        id={styles.navbar}
        className={scroll ? `${styles.scroll}` : ""}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id={styles.nav_items}>
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home"
                    ? `${styles.nav_link_item_active}`
                    : `${styles.nav_link_item}`
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills"
                    ? `${styles.nav_link_item_active}`
                    : `${styles.nav_link_item}`
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? `${styles.nav_link_item_active}`
                    : `${styles.nav_link_item}`
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <ul className={styles.social_icons}>
                <li>
                  <a href="https://github.com/matthael" target="blank">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_.matthael._/"
                    target="blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/matheus-filipe-946430237/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
              <div className={styles.navbar_Btn}>
                <HashLink to="#connect">
                  <button>
                    <span> Let's Connect </span>
                  </button>
                </HashLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
