import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  const skills = [
    {
      name: "React",
      value: 85,
    },
    {
      name: "TypeScript/Javascript",
      value: 90,
    },
    {
      name: "HTML",
      value: 90,
    },
    {
      name: "CSS",
      value: 90,
    },
    {
      name: "Bootstrap",
      value: 80,
    },
    {
      name: "Algorithms & Data Structures",
      value: 85,
    },
  ];

  const projects = [
    {
      title: "Ask.it",
      description:
        "Web application for asking questions.A React.js project built using TypeScript. Used Redux for data storage",
    },
    {
      title: "Vaktija",
      description:
        "A web application that uses an API that fetches the prayer time and displays it to the user",
    },
  ];

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Faris | About Me</title>
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">a bit about myself</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>
                A Front-End Web Developer passionate about creating interactive
                applications and experiences on the web. Second-year computer
                science high school student. <br />
                Currently, I focus on developing web apps with React.js with
                TypeScript.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">projects</h3>
          </Col>
          <Col lg="7">
            {projects.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
