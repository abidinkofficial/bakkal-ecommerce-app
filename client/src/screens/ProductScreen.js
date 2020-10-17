import React, { useState, useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }

    fetchProduct();
  }, [match.params.id]);

  return (
    <>
      <a href='/' className='btn btn-secondary my-3'>Geri dön</a>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup ariant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} inceleme`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Fiyat: ₺{product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Açıklama: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Fiyat:
                  </Col>
                  <Col>
                    <strong>₺{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Stok durumu:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'Mevcut' : 'Mevcut değil'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Sepete ekle
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;