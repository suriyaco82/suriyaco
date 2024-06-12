import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src="http://suriyaco.ar/images/logo_suri.PNG" // URL completa del logo
          width="150"
          height="75"
          className="d-inline-block align-top"
          alt="Suriyaco Valley logo"
        />{' '}
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/about">Acerca De</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
