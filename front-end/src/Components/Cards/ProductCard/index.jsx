import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

export default function ProductCard({ name, image, price }) {
  return (
    <div className="product-container">
      <img className="product-image" src={image} alt={name} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
}.required;
