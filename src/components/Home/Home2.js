import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I'm{" "}
              <span className="purple">
                TUMU SUJAY BABU
              </span>
              , a Computer Science graduate from{" "}
              <b className="purple">IIIT Nagpur</b>.

              <br />
              <br />

              I have professional experience as an{" "}
              <b className="purple">
                SDE Intern at TripFactory
              </b>
              , working on software development and backend systems.

              <br />
              <br />

              My technical expertise includes{" "}
              <b className="purple">
                Java, Spring Boot, MERN Stack, and SQL
              </b>
              , along with strong foundations in{" "}
              <b className="purple">
                Data Structures and Algorithms
              </b>
              .

              <br />
              <br />

              I enjoy building{" "}
              <b className="purple">
                scalable full-stack applications
              </b>
              , designing REST APIs, and solving real-world
              engineering problems.

              <br />
              <br />

              Currently seeking opportunities as a{" "}
              <b className="purple">
                Software Development Engineer (SDE) /
                Full-Stack Developer
              </b>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Developer avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to{" "}
              <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sujaytumu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:sujaybabutumu@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tumu-sujay-babu-8633b0274/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
