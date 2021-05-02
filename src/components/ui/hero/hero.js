import React from "react";
import { Jumbotron, Row, Button, Col, Container, Image } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-containe">
      <Jumbotron className="hero-container" fluid>
        <Container className="about-hero-container">
          <Row className="hero-row-container">
            <Col sm={6}>
              <h1>Coding Browny</h1>
              <p>
                Web & Mobile Developer
              </p>
              <p>
                <Button variant="primary">More About Me</Button>
              </p>
            </Col>
            <Col className="profile-on-hero" sm={4}>
              <Image className="profile-on-hero"
                src="https://images4.alphacoders.com/114/1144863.jpg"
                rounded
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;
