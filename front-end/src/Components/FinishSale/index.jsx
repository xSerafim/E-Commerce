import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { handleFetch } from '../../Services/Api';
import { url } from '../../Utils/Endpoints';
import { method } from '../../Utils/Methods';

export default function FinishSale() {
  const [cupon, setCupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [err, setErr] = useState(false);

  const items = useSelector((state) => state.items);

  const quantityAndPrice = items.map(({ price, quantity }) => ({
    price: price * quantity,
    quantity,
  }));

  const sale = quantityAndPrice.reduce(
    (acc, curr) => ({
      price: acc.price + curr.price,
      quantity: acc.quantity + curr.quantity,
    }),
    { price: 0, quantity: 0 }
  );

  const handleClick = async () => {
    const cuponIsValid = await handleFetch(
      method.GET,
      url.discountByCoupon(cupon)
    );

    if (cuponIsValid) return setDiscount(cuponIsValid.data.message.discount);

    setErr(true);

    setTimeout(() => {
      setErr(false);
    }, 2000);

    return setDiscount(0);
  };

  return (
    <div className="summary-items">
      <div className="wrapper-items-infos">
        <h3 className="items-infos">{`Subtotal(${sale.quantity} ${
          sale.quantity === 1 ? 'item' : 'itens'
        })`}</h3>
        <h3 className="items-price">{`R$ ${sale.price.toFixed(2)}`}</h3>
      </div>
      <hr className="line" />
      {err && <p id="error-message">Cupom inválido ou expirado</p>}
      <div className="wrapper-items-infos">
        <h3 className="items-infos">Cupom de desconto</h3>
        <div className="cupon-input">
          <input
            type="text"
            placeholder="Digite o cupom"
            onChange={({ target: { value } }) => setCupon(value)}
          />
          <button type="button" onClick={handleClick}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
      <hr className="line" />
      <div className="wrapper-items-infos">
        <h3 className="items-infos">Desconto</h3>
        <h3 className="items-price">{`R$ ${(
          (sale.price.toFixed(2) / 100) *
          discount
        ).toFixed(2)}`}</h3>
      </div>
      <hr className="line" />
      <div className="wrapper-items-infos">
        <h3 className="items-infos">Valor total</h3>
        <h3 className="items-total-price">{`R$ ${(
          sale.price.toFixed(2) -
          (sale.price.toFixed(2) / 100) * discount
        ).toFixed(2)}`}</h3>
      </div>
    </div>
  );
}
