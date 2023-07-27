import React from 'react';
import Button from 'react-bootstrap/Button';

function Product({ name, category, price, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-image" />
      <h4>{name}</h4>
      <p></p>
      <p>Price: {price} $CAD</p>
      <Button className='button' variant="outline-dark" size="sm"> Add to cart </Button>
    </div>
  );
}

export default Product;
