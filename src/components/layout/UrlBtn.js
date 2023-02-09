import { Col } from "react-bootstrap";

import styles from "./UrlBtn.module.css";

export const UrlBtn = ({ to, text }) => {
  return (
    <Col>
      <div className={styles.UrlBtn}>
        <a href={to} target="blank">
          {text}
        </a>
      </div>
    </Col>
  );
};
