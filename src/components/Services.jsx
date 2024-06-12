import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <div>
      <h1>Servicios</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Servicio 1</Card.Title>
              <Card.Text>Descripción del Servicio 1</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Servicio 2</Card.Title>
              <Card.Text>Descripción del Servicio 2</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Servicio 3</Card.Title>
              <Card.Text>Descripción del Servicio 3</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
