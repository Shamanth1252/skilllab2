import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Travel Website</h1>
      <Carousel>
        {/* Add carousel slides here */}
      </Carousel>
      <div className="card-container">
        <Card>
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>Card Content 1</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default Home;
