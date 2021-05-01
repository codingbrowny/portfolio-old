import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import './about.css';

const About = () => {
  return (
    <Container className="about-container">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>About</Card.Title>
          <Row>
            <Col sm={8}>
              I specialize in crafting mobile and web apps of high quality to
              solve business problems. I love product development and take time
              to think about why a product should even exist, why to use a
              particular tech stack to develop a product and where the product
              is going.
            </Col>
            <Col sm={4}>MY PIC</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default About;
