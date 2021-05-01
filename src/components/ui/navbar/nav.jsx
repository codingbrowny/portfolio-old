import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

const Navigationbar = () => {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <div className="container">
          <Navbar.Brand href="#home" className="site-brand">
            Codingbrowny
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end ml-auto">
              <Nav.Item>
                <Nav.Link href="/home">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" eventKey="experience">
                  Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" eventKey="skills">
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" eventKey="projects">
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" eventKey="contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
