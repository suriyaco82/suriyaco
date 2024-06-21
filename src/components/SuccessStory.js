import React from 'react';
import './SuccessStory.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SuccessStory() {
  const story = {
    title: 'Implementación y Actualizacion Catastral',
    subtitle: 'Un caso de éxito en la gestión urbana y la recuperacion de la renta  Inmobiliaria',
    description: [
      'En este caso, logramos implementar gemelos digitales para mejorar la gestión urbana y reducir costos operativos,La digitalización precisa de la infraestructura urbana ha permitido una mejor planificación y ejecución de proyectos. ',
      'En este caso, logramos implementar gemelos digitales para mejorar la gestión urbana y reducir costos operativos,La digitalización precisa de la infraestructura urbana ha permitido una mejor planificación y ejecución de proyectos. ',
      'En este caso, logramos implementar gemelos digitales para mejorar la gestión urbana y reducir costos operativos,La digitalización precisa de la infraestructura urbana ha permitido una mejor planificación y ejecución de proyectos. ',
      'En este caso, logramos implementar gemelos digitales para mejorar la gestión urbana y reducir costos operativos,La digitalización precisa de la infraestructura urbana ha permitido una mejor planificación y ejecución de proyectos. ',
      'En este caso, logramos implementar gemelos digitales para mejorar la gestión urbana y reducir costos operativos,La digitalización precisa de la infraestructura urbana ha permitido una mejor planificación y ejecución de proyectos. ',

    ],
    media: [
      { type: 'image', url: 'https://suriyaco.ar/images/gemelo.jpeg' },
      { type: 'video', url: 'https://suriyaco.ar/images/gemelodigital.MP4', poster: 'https://suriyaco.ar/images/gemelo.jpeg' },
    ],
  };

  return (
    <div className="success-story">
      <Container>
        <Row>
          <Col>
            <h1>{story.title}</h1>
            <h2>{story.subtitle}</h2>
            {story.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Col>
        </Row>
        <Row>
          {story.media.map((mediaItem, index) => (
            <Col md={6} key={index}>
              {mediaItem.type === 'image' ? (
                <Card className="media-card">
                  <Card.Img variant="top" src={mediaItem.url} />
                </Card>
              ) : (
                <Card className="media-card">
                  <video controls poster={mediaItem.poster}>
                    <source src={mediaItem.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Card>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SuccessStory;
