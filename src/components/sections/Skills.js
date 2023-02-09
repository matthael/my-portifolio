import { Col, Container, Row } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../../img/meter1.svg";
import meter2 from "../../img/meter2.svg";
import meter3 from "../../img/meter3.svg";
import colorSharp from "../../img/color-sharp.png";

import styles from "./Skills.module.css";

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
                These graphics show an approximation of my knowledge and
                technical skills in each of the following technologies
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={styles.skill_slider}
              >
                <div className={styles.item}>
                  <img src={meter1} alt="skills-img" />
                  <h5> HTML </h5>
                </div>
                <div className={styles.item}>
                  <img src={meter3} alt="skills-img" />
                  <h5> CSS </h5>
                </div>
                <div className={styles.item}>
                  <img src={meter2} alt="skills-img" />
                  <h5> JS </h5>
                </div>
                <div className={styles.item}>
                  <img src={meter2} alt="skills-img" />
                  <h5> React </h5>
                </div>
                <div className={styles.item}>
                  <img src={meter2} alt="skills-img" />
                  <h5> Node </h5>
                </div>
                <div className={styles.item}>
                  <img src={meter3} alt="skills-img" />
                  <h5> Bootstrap </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt={""} className={styles.bg_image} />
    </section>
  );
};
