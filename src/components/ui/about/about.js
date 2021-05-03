import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container className="about-container">
      <Card style={{ width: "100%" }} className="about-card">
        <Card.Body>
          <Row className="about-card-row">
            <Col sm={7}>
              <Card.Title>About</Card.Title>
              <p className="about-card-col-body">
                I specialize in crafting mobile and web apps of high quality to
                solve business problems. I love product development and take
                time to think about why a product should even exist, why to use
                a particular tech stack to develop a product and where the
                product is going.
              </p>
            </Col>
            <Col sm={5}>
              <Card.Title>Basic Info</Card.Title>
              <Row className="basic-info-row">
                <Col sm={4}>Email</Col>
                <Col sm={6}>codingbrowny@gmail.com</Col>
                <Col sm={4}> Age:</Col>
                <Col sm={6}> 22</Col>
                <Col sm={4}> Age:</Col>
                <Col sm={6}> 22</Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default About;
