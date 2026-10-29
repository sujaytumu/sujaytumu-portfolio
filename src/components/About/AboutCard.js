
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm{" "}
            <span className="purple">Tumu Sujay Babu </span>,
            a developer who enjoys exploring ideas, solving challenges,
            and building things that make a difference.

            <br />
            <br />

            I believe in learning by doing. Whether I'm developing a
            project, debugging a tricky issue, or exploring a new
            concept, I enjoy understanding how things work and finding
            effective solutions.

            <br />
            <br />

            Beyond development, I like activities that keep me curious,
            creative, and refreshed. My interests include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building solutions, one line at a time!"
          </p>

          <footer className="blockquote-footer">
            Sujay Babu Tumu
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
