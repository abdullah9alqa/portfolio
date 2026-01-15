import React from "react";
import { Col, Row } from "react-bootstrap";

import { SiCsharp, SiDotnet } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp size={40} />
        <div className="tech-icons-text">C#</div>
        <div className="tech-icons-text"></div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet size={40} />
        <div className="tech-icons-text">ASP.NET Core</div>
        <div className="tech-icons-text"></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={"https://cdn.prod.website-files.com/6613b840cca576e2071fcfaa/6889d23f942270565468d8a1_n8n%20logo.jpg"} style={{width:"40px"}} alt="N8N" />
        <div className="tech-icons-text">N8N</div>
        <div className="tech-icons-text"></div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap size={40} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
