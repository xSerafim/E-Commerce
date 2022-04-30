import PropTypes from 'prop-types';
import useLocalStorage from '../../Hooks';

export default function Quantity({ item }) {
  const [setValue] = useLocalStorage();

  return (
    <div className="calc-price">
      <div className="product-quantity">
        <button type="button" onClick={() => setValue([item], false)}>
          <i className="fa-solid fa-minus" />
        </button>
        <input type="number" value={item.quantity} readOnly />
        <button type="button" onClick={() => setValue([item])}>
          <i className="fa-solid fa-plus" />
        </button>
        <div className="subtotal-price">
          <h3 className="cart-item-price">{`R$${item.price}`}</h3>
        </div>
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
