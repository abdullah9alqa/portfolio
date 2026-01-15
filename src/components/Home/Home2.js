import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a junior software developer who enjoys learning and building
              web applications step by step. I like turning simple ideas into
              working projects and improving them as I learn more.
              <br />
              <br />I mainly work with
              <i>
                <b className="purple">
                  {" "}
                  ASP.NET Core, React, JavaScript, and C#{" "}
                </b>
              </i>
              and I have basic experience in building APIs and connecting them
              with frontend interfaces.
              <br />
              <br />
              I’m interested in developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications and simple full-stack systems{" "}
                </b>
              </i>
              while focusing on clean code and practical solutions.
              <br />
              <br />I enjoy working on small to medium projects using
              <b className="purple"> ASP.NET Core </b>
              for the backend and modern frontend libraries like{" "}
              <i>
                <b className="purple">React.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
