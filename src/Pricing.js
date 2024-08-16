import React, { useEffect, useRef } from 'react';
import Nav from './Nav'; // Ensure this is correctly implemented
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Pricing.css';

const Pricing = () => {
  const countries = [
    'United States', 'Canada', 'Mexico', 'United Kingdom', 'Germany',
    'France', 'Italy', 'Spain', 'Australia', 'Japan', 'China', 'India',
    'Brazil', 'Russia', 'South Africa', 'Saudi Arabia', 'South Korea',
    'Argentina', 'Turkey', 'Indonesia', 'Nigeria'
  ];
  
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach(card => {
      card.classList.add('show');
    });
  }, []);

  return (
    <>
      <Nav />
      <h1 className='text-center pt-5'>  Pricing & Details</h1>
      <Container className='m-auto pt-5'>
        <Row className="mt-4">
          
          {countries.map((country, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card
                className="text-center card-animate"
                ref={el => cardRefs.current[index] = el}
              >
                <Card.Body>
                  <Card.Title>{country}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
