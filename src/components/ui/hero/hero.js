import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-containe">
      <Jumbotron className="hero-container" fluid>
        <div className="container mr-auto">
          <h1 className="hero-head">Hello, world!</h1>
          <p>
            Coding Browny
          </p>
          <p>
            <Button variant="primary">Let's Connect</Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Hero;
