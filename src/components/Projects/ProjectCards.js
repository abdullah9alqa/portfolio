import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "100px 0" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <h1 className="project-heading">
              My <strong className="purple">Projects</strong>
            </h1>

            <p style={{ fontSize: "1.2em", marginTop: "30px" }}>
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
