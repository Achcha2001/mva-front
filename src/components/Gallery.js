import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './gallery.css'; // Link to your CSS

function Gallery() {
  return (
    <Container fluid className="gallery-container">
      <div className="under-construction-banner">
        🚧 This page is under construction. Please check back soon! 🚧
      </div>
      <Row className="mt-5">
        <Col>
          <h1 className="gallery-heading">Gallery</h1>
          {/* Future Image Gallery goes here */}
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
