import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationHeader.scss';

export function NavigationHeader() {
  return (
    <Navbar className="navbar-color p-4" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-text" href="#home">Jessica Chastain Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-text" href="#profile-view">Profile</Nav.Link>
            <Nav.Link className="navbar-text" href="#movie-card">Movies</Nav.Link>
            <Nav.Link className="navbar-text" href="#login-view">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}