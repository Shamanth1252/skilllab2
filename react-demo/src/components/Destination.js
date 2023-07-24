import React from 'react';
import { Card } from 'react-bootstrap';

const Destination = () => {
  // Sample data for destinations
  const destinations = [
    {
      name: 'Destination 1',
      image: 'https://placeimg.com/300/200/arch',
      details: 'Destination 1 details and description',
      price: '$1000'
    },
    {
      name: 'Destination 2',
      image: 'https://placeimg.com/300/200/nature',
      details: 'Destination 2 details and description',
      price: '$1200'
    },
    // Add more destinations here
  ];

  return (
    <div>
      <h1>Tourist Destinations</h1>
      <div className="row">
        {destinations.map((destination, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={destination.image} />
              <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>{destination.details}</Card.Text>
                <p>Price: {destination.price}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
