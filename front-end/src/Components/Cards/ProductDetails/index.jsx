import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { removeDuplicate } from '../../../Utils/Functions/removeDuplicate';
import AddToCartBtn from '../../Buttons/AddToCart';
import './style.css';

export default function ProductDetails({ data }) {
  const { items } = data[0];

  const [itemIndex, setItemIndex] = useState(0);
  const [image, setImage] = useState(items[0]);

  const colors = [...new Set(items.map(({ color }) => color))];

  const imageColor = (index) => {
    setImage(items.find((item) => item.color === colors[index]));
  };

  const colorsAndSizes = removeDuplicate(colors, items);

  return (
    <div className="details-box">
      <div className="image-box">
        <img
          className="product-image-details"
          src={image.image}
          alt={image.name}
        />
      </div>

      <div className="color-container">
        <p className="product-name">{image.name}</p>
        <p className="price detail-price">{`R$${image.price}`}</p>
        <select>
          <option>Selecione o tamanho...</option>
          {colorsAndSizes[itemIndex].sizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
        <div>
          <p>Cores Disponíveis</p>
          <div>
            {colorsAndSizes.map(({ color }, i) => (
              <button
                className="color-button"
                type="button"
                key={color}
                onClick={() => setItemIndex(i) > imageColor(i)}
              >
                <div className="color-box" style={{ backgroundColor: color }} />
              </button>
            ))}
          </div>
        </div>
        <AddToCartBtn />
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  data: PropTypes.array,
}.required;
