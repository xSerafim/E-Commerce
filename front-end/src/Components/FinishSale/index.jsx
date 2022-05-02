import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetch } from '../../Services/Api';
import { saveItem } from '../../Store/Actions/totalPrice';
import { url } from '../../Utils/Endpoints';
import { method } from '../../Utils/Methods';

export default function FinishSale() {
  const [cupon, setCupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [err, setErr] = useState(false);
  const [salePrice, setSalePrice] = useState(0);
  const [saleQuantity, setSaleQuantity] = useState(0);

  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);

  useEffect(() => {
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

    setSalePrice(sale.price.toFixed(2));
    setSaleQuantity(sale.quantity);
  }, [items]);

  useEffect(() => {
    dispatch(saveItem((salePrice - discount).toFixed(2)));
  }, [discount, salePrice]);

  const handleClick = async () => {
    const cuponIsValid = await handleFetch(
      method.GET,
      url.discountByCoupon(cupon)
    );

    if (cuponIsValid)
      return setDiscount(
        ((salePrice / 100) * cuponIsValid.data.message.discount).toFixed(2)
      );

    setErr(true);

    setTimeout(() => {
      setErr(false);
    }, 2000);

    return setDiscount(0);
  };

  return (
    <div className="summary-items">
      <div className="wrapper-items-infos">
        <h3 className="items-infos">{`Subtotal(${saleQuantity} ${
          saleQuantity === 1 ? 'item' : 'itens'
        })`}</h3>
        <h3 className="items-price">{`R$ ${salePrice}`}</h3>
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
        <h3 className="items-price">{`R$ ${discount}`}</h3>
      </div>
      <hr className="line" />
      <div className="wrapper-items-infos">
        <h3 className="items-infos">Valor total</h3>
        <h3 className="items-total-price">{`R$ ${(salePrice - discount).toFixed(
          2
        )}`}</h3>
      </div>
    </div>
  );
}
