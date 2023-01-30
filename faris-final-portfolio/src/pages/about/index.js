import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const About = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

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
      title: "Netflix Clone",
      description:
        "Front-end Netflix clone with Firebase back-end. Used TMDB API for data and Firebase Authentication for login. Stored user specific data with React and Firestore. Styled with Tailwind CSS",
      code: "https://github.com/Hrusta/netflix-clone",
      live: "https://hrusta.github.io/netflix-clone/",
    },
    {
      title: "Ask.it",
      description:
        "Web application for asking questions. A React.js project built using TypeScript. Used Redux for data storage.",
      code: "https://github.com/Hrusta/ask.itv3",
      live: "https://hrusta.github.io/ask.itv3/",
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
            <h3 className="color_sec py-4">A bit about myself</h3>
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
            <h3 className="color_sec py-4">Skills</h3>
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
            <h3 className="color_sec py-4">Projects</h3>
          </Col>
          <Col lg="7">
            {projects.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>

                  <div className="intro_btn-action pb-5">
                    <div
                      onClick={() => openInNewTab(data.code)}
                      id="button_p"
                      className="ac_btn btn "
                    >
                      Code
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>

                    <div
                      onClick={() => openInNewTab(data.live)}
                      id="button_h"
                      className="ac_btn btn"
                    >
                      Live
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
