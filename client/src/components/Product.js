import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <a href={`/product/${product._id}`}>
        <Card.Title as='div' className='my-3'><strong>{product.name}</strong></Card.Title>
      </a>

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} inceleme`} />
      </Card.Text>

      <Card.Text as='h3'>
        ₺{product.price}
      </Card.Text>
    </Card>
  )
};

export default Product;