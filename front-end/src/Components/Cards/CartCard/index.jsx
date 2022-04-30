import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import DeleteItemBtn from '../../Buttons/DeleteItem';
import Quantity from '../../Quantity';
import './style.css';

export default function CartCard({ item }) {
  return (
    <div className="product-cart-box">
      <div className="cart-container">
        <div className="image-container">
          <Link to={`/product/${item.adId}`}>
            <img className="cart-image" src={item.image} alt={item.name} />
          </Link>
        </div>
        <div className="cart-infos">
          <h3 className="cart-item-name">{item.name}</h3>
          <div className="cart-color" style={{ backgroundColor: item.color }} />
        </div>
        <DeleteItemBtn className="delete-btn" id={item.id} />
      </div>
      <Quantity item={item} />
      <div className="line" />
    </div>
  );
}

CartCard.propTypes = {
  item: PropTypes.string,
}.required;
