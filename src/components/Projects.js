import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../img/color-sharp2.png";
import Clio from "../img/Clio.png";

import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      title: "Clio",
      description:
        "Aplicação de pesquisa de Livros, construída para facilitar a pesquisa de livros e encontrar um local de compra.",
      imgUrl: Clio,
    },
    {
      title: "Clio",
      description:
        "Aplicação de pesquisa de Livros, construída para facilitar a pesquisa de livros e encontrar um local de compra.",
      imgUrl: Clio,
    },
    {
      title: "Clio",
      description:
        "Aplicação de pesquisa de Livros, construída para facilitar a pesquisa de livros e encontrar um local de compra.",
      imgUrl: Clio,
    },
    {
      title: "Clio",
      description:
        "Aplicação de pesquisa de Livros, construída para facilitar a pesquisa de livros e encontrar um local de compra.",
      imgUrl: Clio,
    },
    {
      title: "Clio",
      description:
        "Aplicação de pesquisa de Livros, construída para facilitar a pesquisa de livros e encontrar um local de compra.",
      imgUrl: Clio,
    },
    {
      title: "Clio",
      description:
        "Aplicação de pesquisa de Livros, construída para facilitar a pesquisa de livros e encontrar um local de compra.",
      imgUrl: Clio,
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
                      return <ProjectCard key={index} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Lorem Ipsum</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem Ipsum</p>
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
