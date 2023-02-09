import { Col } from "react-bootstrap";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={styles.proj_imgbx}>
        <img src={imgUrl} alt={""} />
        <div className={styles.proj_txt}>
          <h4> {title} </h4>
          <span> {description} </span>
        </div>
      </div>
    </Col>
  );
};
