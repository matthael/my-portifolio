import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

import styles from "./Newsletter.module.css";

export const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className={styles.newsletter_bx}>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3> Subscribe to our Newsletter</h3>
            {status === "sending" && <Alert> Sending </Alert>}
            {status === "error" && <Alert variant="dander">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className={styles.new_email_bx}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
