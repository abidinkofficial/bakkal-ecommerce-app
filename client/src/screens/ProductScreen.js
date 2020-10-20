import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <a href='/' className='btn btn-secondary my-3'>Geri dön</a>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
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
      }
    </>
  );
}

export default ProductScreen;