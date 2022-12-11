import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">caleb</Navbar.Brand>
        </Container>
      </Navbar>
  )
};

export default Navigation;