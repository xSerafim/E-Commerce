import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function ProductCard({ name, image, price, adId }) {
  return (
    <div className="product-container">
      <Link to={`/product/${adId}`}>
        <img className="product-image" src={image} alt={name} />
      </Link>
      <p className="product-name">{name}</p>
      <span>{`R$ ${price}`}</span>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
}.required;
