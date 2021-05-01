import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">Codingbrowny</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end ml-auto" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
