import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';
import { createOrder } from '../actions/orderActions';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const orderCreate = useSelector(state => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if(success) {
      history.push(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      totalPrice: cart.totalPrice
    }));
  }

  const addDecimals = (num) => {
    return (Math.round(num*100) / 100).toFixed(2);
  }

  // Calculate prices
  cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 7.99);
  cart.totalPrice = addDecimals(Number(cart.itemsPrice) + Number(cart.shippingPrice));

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Teslimat</h2>
              <p>
                <strong>Adres: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Ödeme yöntemi</h2>
              <strong>Yöntem: </strong> {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Siparişteki ürünler</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Sepette hiç ürün yok.</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₺{addDecimals(item.price)} = ₺{addDecimals(item.qty * item.price)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Sipariş özeti</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Ürünler</Col>
                  <Col>₺{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Kargo</Col>
                  <Col>₺{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Toplam</Col>
                  <Col>₺{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type='button' className='btn-block' disabled={cart.cartItems === 0} onClick={placeOrderHandler}>Siparişi tamamla</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;