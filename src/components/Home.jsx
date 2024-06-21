import React, { useState } from 'react';
import './Home.css';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import SuccessStory from './SuccessStory';



function Home() {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const newsItems = [
    {
      title: 'Escaneo 3D',
      description: 'Mediante dispositivos moviles se esta llevando a cabo el escaneo y la digitalizacion inteligente de algunos monumentos de la ciudad.',
      mediaType: 'video',
      mediaUrl: 'https://suriyaco.ar/images/realdadA.mov',
      poster: 'https://suriyaco.ar/images/nobe.jpeg',
    },
    {
      title: 'Realidad Virtual',
      description: 'Con la plataforma de ESRI y su aplicacion VR360, se esta desarrollando una aplicacion para el uso de las gafas de META.',
      mediaType: 'image',
      mediaUrl: 'https://suriyaco.ar/images/mapasRV.jpg',
    },
    {
      title: 'App Realidad Aumentada',
      description: 'Se esta desarrollando una aplicacion para leer archivos en 3D, para IOS, la misma sera parte del proyecto de la virualizacion de monumentos. ',
      mediaType: 'image',
      mediaUrl: 'https://suriyaco.ar/images/xcode.JPG',
    },
    {
      title: 'Nube de puntos',
      description: 'Modelo del Dique de los Sauces nube de puntos.',
      mediaType: 'video',
      mediaUrl: 'https://suriyaco.ar/images/dique.MOV',
      poster: 'https://suriyaco.ar/images/captura.jpeg',
    },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <Container>
          <Row>
            <Col>
              <h1>Suriyaco</h1>
              <p>Mapas inteligentes</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={8} className="main-content">
            <section className="mission-section">
              <h2>Nuestra Misión</h2>
              <p>
                Somos una empresa tecnológica, que desarrolla e implementa herramientas 
                de alta calidad relacionadas con las ciencias de la tierra.
                Creamos gemelos digitales y capturamos la realidad del medio ambiente,
                para optimizar la toma de decisiones que se tomarán en relación 
                a espacios productivos y urbanos; logrando bajar los costos, 
                maximizando el desarrollo. 
              </p>
            </section>
            <section className="cards-section">
              <h2>Galería de Proyectos</h2>
              <Row>
                <Col md={4}>
                  <Card className="image-card">
                    <video className="card-video" controls poster="https://suriyaco.ar/images/RAmapas.jpeg">
                      <source src="https://suriyaco.ar/images/realdadA.mov" type="video/mov" />
                      Your browser does not support the video tag.
                    </video>
                    <Card.Body>
                      <Card.Title>Realidad Aumentada</Card.Title>
                      <Card.Text>Descripción breve del proyecto.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="image-card">
                    <video className="card-video" controls poster="https://suriyaco.ar/images/gemelo.jpeg">
                      <source src="https://suriyaco.ar/images/gemelodigital.MP4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <Card.Body>
                      <Card.Title>Gemelo Digital</Card.Title>
                      <Card.Text>Descripción breve del proyecto.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="image-card">
                    <video className="card-video" controls poster="https://suriyaco.ar/images/captura.jpeg">
                      <source src="https://suriyaco.ar/images/capturando.MP4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <Card.Body>
                      <Card.Title>Capturando la Realidad</Card.Title>
                      <Card.Text>Descripción breve del proyecto.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>
          </Col>
          <Col lg={4} className="sidebar">
            <h2>Noticias</h2>
            {newsItems.map((newsItem, index) => (
              <div key={index} className="news-item" onClick={() => handleToggle(index)} aria-controls={`collapse-text-${index}`} aria-expanded={open === index}>
                <h5>
                  {newsItem.title}
                </h5>
                <Collapse in={open === index}>
                  <div id={`collapse-text-${index}`}>
                    {newsItem.mediaType === 'image' ? (
                      <img src={newsItem.mediaUrl} alt={newsItem.title} className="news-image" />
                    ) : (
                      <video controls className="news-video" poster={newsItem.poster}>
                        <source src={newsItem.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <p>{newsItem.description}</p>
                  </div>
                </Collapse>
              </div>
            ))}
          </Col>
        </Row>
        <SuccessStory />
      </Container>
    </div>
  );

}

export default Home;
