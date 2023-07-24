import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Organization Name
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Address: Your Organization Address</p>
              <p>Location: Your Organization Location</p>
              <p>Contact Details: Your Contact Details</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default AboutUs;
