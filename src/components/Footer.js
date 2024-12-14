import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Make sure to add the custom CSS

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4}>
            <h5>About Us</h5>
            {/* Add the MVA logo here */}
            <img 
              src="/images/logo-mva.png" // Adjust the path if needed
              alt="MVA Logo"
              className="footer-logo" // Optional class for styling
            />
            <p>
              The Mercantile Volleyball Association (MVA) is committed to promoting
              volleyball and encouraging participation across various organizations.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/executive-committee">Executive Committee</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p><i className="fas fa-envelope"></i> info@mercantilevolleyball.com</p>
            <p><i className="fas fa-phone"></i> +94 11 234 5678</p>
            <p><i className="fas fa-map-marker-alt"></i> 123, MVA Street, Colombo, Sri Lanka</p>
            {/* Social Media Icons */}
            <ul className="social-icons list-unstyled d-flex">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Mercantile Volleyball Association. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
