import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "../layout/ProjectCard";

import colorSharp2 from "../../img/color-sharp2.png";
import Clio from "../../img/Clio.png";
import Vulcan from "../../img/Vulcan.png";
import Apollon from "../../img/Apollon.png";
import PioVeg from "../../img/PioVeg.png";
import Calc from "../../img/Calc.png";
import TTT from "../../img/TTT.png";

import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      title: "Clio",
      description:
        "Book search app built to make it easy to search for books and find a place to buy.",
      imgUrl: Clio,
      UrlLive: "https://clio-books.vercel.app",
      UrlRepository: "https://github.com/Biganao/clio",
    },
    {
      title: "Vulcan",
      description:
        "Project management application to facilitate the creation and editing of projects.",
      imgUrl: Vulcan,
      UrlLive: "https://vulcan-projects.vercel.app",
      UrlRepository: "https://github.com/Biganao/vulcan",
    },
    {
      title: "Apollon",
      description:
        "Music bot for discord updated on DiscordV14 with all commands in slash",
      imgUrl: Apollon,
      UrlLive:
        "https://discord.com/api/oauth2/authorize?client_id=1054594314841358436&permissions=8&scope=bot%20applications.commands",
      UrlRepository: "https://github.com/Biganao/MusicBot-Apollon",
    },
    {
      title: "PioVeg",
      description: "Landing-page commissioned for the vegan restaurant PioVeg.",
      imgUrl: PioVeg,
      UrlLive: "https://pio-veg.vercel.app",
      UrlRepository: "https://github.com/Biganao/PioVeg",
    },
    {
      title: "Recordum Calculatorius",
      description: "Arithmetic mean calculator based on 3 grades.",
      imgUrl: Calc,
      UrlLive: "https://recordum-calculatorius.vercel.app",
      UrlRepository: "https://github.com/Biganao/Calculadora-MA",
    },
    {
      title: "Tic-Tac-Theus",
      description: "Player versus player Tic Tac Toe game.",
      imgUrl: TTT,
      UrlLive: "https://tictactheus.vercel.app",
      UrlRepository: "https://github.com/Biganao/Tic-Tac-Theus",
    },
  ];

  return (
    <section className={styles.projects} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2> Projects </h2>
            <p>
              "Sometimes it's the people no one imagines anything of who do the
              things that no one can imagine" <br />
              <br /> ~ Alan Turing, father of modern computer science
            </p>
            <Tab.Container id="projects_tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                id={styles.nav_pills}
                className="mb-5 justify-content-center align-items-center"
              >
                <Nav.Item id={styles.nav_item} className={styles.first}>
                  <Nav.Link eventKey="first" className={styles.nav_link}>
                    Tab One
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item id={styles.nav_item} className={styles.second}>
                  <Nav.Link eventKey="second" className={styles.nav_link}>
                    Tab Two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item id={styles.nav_item} className={styles.third}>
                  <Nav.Link eventKey="third" className={styles.nav_link}>
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((projects, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...projects}
                          UrlLive={projects.UrlLive}
                          UrlRepository={projects.UrlRepository}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Comming soon more projects, for more informations subscribe
                    to our <span className={styles.link_txt}> newsletter</span>{" "}
                    or follow me in
                    <a
                      href="https://github.com/Biganao"
                      target="blank"
                      className={styles.link_txt}
                    >
                      {"  "}
                      GitHub
                    </a>
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Comming soon more projects, for more informations subscribe
                    to our <span className={styles.link_txt}> newsletter</span>{" "}
                    or follow me in
                    <a
                      href="https://github.com/Biganao"
                      target="blank"
                      className={styles.link_txt}
                    >
                      {"  "}
                      GitHub
                    </a>
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className={styles.bg_image} alt={""} />
    </section>
  );
};
