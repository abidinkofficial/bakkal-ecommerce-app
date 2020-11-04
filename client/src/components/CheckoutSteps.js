import React from 'react';
import { Nav, nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>

      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Giriş yap</Nav.Link>
          </LinkContainer>
        ) : (<Nav.Link disabled>Giriş yap</Nav.Link>)}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Teslimat</Nav.Link>
          </LinkContainer>
        ) : (<Nav.Link disabled>Teslimat</Nav.Link>)}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Ödeme</Nav.Link>
          </LinkContainer>
        ) : (<Nav.Link disabled>Ödeme</Nav.Link>)}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Sipariş</Nav.Link>
          </LinkContainer>
        ) : (<Nav.Link disabled>Sipariş</Nav.Link>)}
      </Nav.Item>

    </Nav>
  );
}

export default CheckoutSteps;