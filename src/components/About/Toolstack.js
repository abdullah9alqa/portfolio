import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import { SiMicrosoftsqlserver, SiVisualstudio, SiDocker } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Google Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio size={40} />
        <div className="tech-icons-text">Visual Studio 2022</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver size={40} />
        <div className="tech-icons-text">
          SQL Server Management Studio 21
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker size={40} />
        <div className="tech-icons-text">Docker Desktop</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
