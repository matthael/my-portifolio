import { Col, Container, Row } from "react-bootstrap";

import { MailChimpForm } from "../newsletter/MailChimpForm";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../img/Logo.svg";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div>
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
            </div>
            <p>
              Copyright 2023. All Rights Reserved
              <a href="https://github.com/Biganao" target="blank">
                {"  "}
                Matheus Dev
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
