import { useState, useEffect, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";

import BannerAstronaut from "../img/BannerAstronaut.svg";
import styles from "./Banner.module.css";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = useCallback(() => {
    const toRotate = [
      "Matheus",
      "Front-End Developer",
      "UI/UX Designer",
      "Web Developer",
    ];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [isDeleting, loopNum, text.length]);

  return (
    <Router>
      <section className={styles.banner} id="home">
        <Container>
          <Row className={styles.align_items_center}>
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInLeft" : ""
                    }
                  >
                    <span className={styles.tagline}>
                      {" "}
                      Welcome to my Space{" "}
                    </span>
                    <h1>
                      {`Hi, I'm `}
                      <span className={styles.txt_rotate}>
                        <span className={styles.wrap}>{text}</span>
                      </span>
                    </h1>
                    <p>
                      lorem ipsum dolor sit amet consectetur adipiscing elit
                      lorem ipsum dolor sit amet consectetur adipiscing elit
                      lorem ipsum dolor sit amet consectetur adipiscing elit
                      lorem ipsum dolor sit amet consectetur adipiscing elit
                      lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                    <div className={styles.banner_Btn}>
                      <HashLink to="#connect" activeClassName={styles.selected}>
                        <button>
                          <span> Let's Connect </span>
                          <BsArrowRightCircle size={25} />
                        </button>
                      </HashLink>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={BannerAstronaut} alt="Header Astronaut Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
