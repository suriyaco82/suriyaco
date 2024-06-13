import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container>
        <Row className="py-4 text-center">
          <Col md={12}>
            <h5>Síguenos en</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a> */}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={12}>
            <p>&copy; 2024 Suriyaco Valley. Todos los derechos reservados.</p>
          </Col>
        </Row> 
      </Container>
    </footer>
  );
};

export default Footer;
