import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m a Computer Information Systems graduate who is currently
            focused on learning and improving my skills in software
            development.
            <br />
            <br />
            At the moment, I’m learning how to build web applications using
            <span className="purple"> ASP.NET Core </span>
            for backend development and
            <span className="purple"> React </span>
            for frontend interfaces. I enjoy understanding how different parts
            of an application work together and how data flows between the
            client and the server.
            <br />
            <br />
            I’m continuously practicing through small projects, tutorials, and
            personal experiments to strengthen my knowledge and gain practical
            experience.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 📘
            </li>
            <li className="about-activity">
              <ImPointRight /> Building small practice projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving problem-solving skills 🧠
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning step by step and building better projects every day."
          </p>
          <footer className="blockquote-footer">Aspiring Developer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
