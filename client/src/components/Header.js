import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="bg-primary navbar-dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Bakkal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Sepet</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i> Giriş yap</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;