import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';  

function CustomNavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="custom-navbar-brand">
          <img src="/images/logo-mva.png" alt="MVA Logo" id="custom-navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="custom-navbar-nav" className="custom-navbar-toggler" />
        <Navbar.Collapse id="custom-navbar-nav" className="custom-navbar-collapse">
          <Nav className="custom-nav-links ms-auto">
            <Nav.Link as={NavLink} exact to="/" activeClassName="custom-active-link" className="custom-nav-item">Home </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" activeClassName="custom-active-link" className="custom-nav-item">Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="custom-active-link" className="custom-nav-item">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/news" activeClassName="custom-active-link" className="custom-nav-item">News</Nav.Link>
            <Nav.Link as={NavLink} to="/history" activeClassName="custom-active-link" className="custom-nav-item">History</Nav.Link>
            <Nav.Link as={NavLink} to="/circulars" activeClassName="custom-active-link" className="custom-nav-item">Circulars</Nav.Link>
            <Nav.Link as={NavLink} to="/team-ranking" activeClassName="custom-active-link" className="custom-nav-item">Team Ranking</Nav.Link>
            <Nav.Link as={NavLink} to="/executive-committee" activeClassName="custom-active-link" className="custom-nav-item">Executive Committee</Nav.Link>
          </Nav>

          <Nav className="custom-nav-auth ms-auto">
            <Button as={NavLink} to="/login" variant="outline-light" activeClassName="custom-active-link" className="custom-login-button">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavigationBar;
