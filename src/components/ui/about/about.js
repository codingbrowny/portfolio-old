import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container className="about-container">
      <Card style={{ width: "100%" }} border="primary" className="about-card">
        <Card.Body>
          <Row className="about-card-row">
            <Col sm={6}>
              <Card.Title>About</Card.Title>
              <p className="about-card-col-body">
                I specialize in crafting mobile and web apps of high quality to
                solve business problems. I love product development and take
                time to think about why a product should even exist, why to use
                a particular tech stack to develop a product and where the
                product is going.
              </p>
            </Col>
            <Col sm={4}>
              <Card.Title>Basic Info</Card.Title>
              <p className="about-card-col-body">Name : Browny</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default About;
