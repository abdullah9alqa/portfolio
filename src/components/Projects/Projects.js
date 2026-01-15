import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row
          style={{
            minHeight: "80vh",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Col md={8} style={{ textAlign: "center" }}>
            <h1 className="project-heading">
              My <strong className="purple">Projects</strong>
            </h1>

            <p style={{ color: "white", fontSize: "1.2em", marginTop: "25px" }}>
              <span className="purple">
                Currently, there are no projects published yet.
                <br />
                Insha’Allah, projects will be published as soon as possible.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
