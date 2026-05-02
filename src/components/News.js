import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './News.css';

const newsData = [
  {
    id: 1,
    title: "Exciting changes awaited in Mercantile Volleyball",
    image: "/images/mva-news1.jpg",
    description: "The Mercantile Volleyball Association (MVA) has officially launched preparations for 2025...",
  },
  {
    id: 2,
    title: "Volleyball Championship heats up",
    image: "/images/mva-news2.jpg",
    description: "Following the success of the previous tournaments, MVA has introduced a new category...",
  },
];

function News() {
  return (
    <Container className="news-section my-5">
      <h2 className="text-center mb-4">Latest News</h2>
      <Row>
        {newsData.map((news) => (
          <Col key={news.id} md={6} lg={4} className="mb-4">
            <Card className="news-card">
              <Card.Img variant="top" src={news.image} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
