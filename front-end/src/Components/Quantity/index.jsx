import PropTypes from 'prop-types';
import useLocalStorage from '../../Hooks';

export default function Quantity({ item }) {
  const [setValue] = useLocalStorage();

  return (
    <div className="calc-price">
      <div className="product-quantity">
        <button
          type="button"
          className="min-button"
          disabled={item.quantity === 1}
          onClick={() => setValue([item], false)}
        >
          <i className="fa-solid fa-minus" />
        </button>
        <input
          type="number"
          className="quantity-input"
          value={item.quantity}
          readOnly
        />
        <button
          type="button"
          className="plus-button"
          onClick={() => setValue([item])}
        >
          <i className="fa-solid fa-plus" />
        </button>
      </div>
      <div className="subtotal-price">
        <h3 className="cart-item-price">{`R$ ${(
          item.price * item.quantity
        ).toFixed(2)}`}</h3>
      </div>
    </div>
  );
}

Quantity.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
}.required;
