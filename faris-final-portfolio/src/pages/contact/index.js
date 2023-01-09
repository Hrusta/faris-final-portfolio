import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <title>Faris | Contact</title>
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${"faris.hrustic@hotmail.com"}`}>
                {"faris.hrustic@hotmail.com"}
              </a>
              <br />
              <br />
              <p>
                <strong>Github:</strong>{" "}
                <a href="https://github.com/Hrusta">
                  https://github.com/Hrusta
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/faris-hrustic/">
                  https://www.linkedin.com/in/faris-hrustic
                </a>
              </p>
            </address>
          </Col>
          <motion.div
            className="animtionContainer"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          >
            <h1 className="not-selectable">F</h1>
          </motion.div>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
