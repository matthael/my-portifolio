import { Col, Container, Row } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Skills.module.css";
import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiJest, SiTailwindcss } from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={styles.skills} id="skills">
      <Container>
        <Row>
          <Col>
            <div className={styles.skill_bx}>
              <h2> Skills </h2>
              <p>
                These are my knowledges and
                technical skills in some tecnologies
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={styles.skill_slider}
              >
                <div className={styles.item}>
                  <FaReact className={styles.icon} color="#6ac4db" />
                  <h5> React </h5>
                </div>
                <div className={styles.item}>
                  <FaNodeJs className={styles.icon} color="#6ca264" />
                  <h5> Node </h5>
                </div>
                <div className={styles.item}>
                  <SiMongodb className={styles.icon} color="#42f265" />
                  <h5> MongoDB </h5>
                </div>
                <div className={styles.item}>
                  <FaBootstrap className={styles.icon} color="#8300f8" />
                  <h5> Bootstrap </h5>
                </div>
                <div className={styles.item}>
                  <SiJest className={styles.icon} color="#943f5b" />
                  <h5> Jest </h5>
                </div>
                <div className={styles.item}>
                  <SiTailwindcss className={styles.icon} color="#56bcf7" />
                  <h5> Tailwind </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
