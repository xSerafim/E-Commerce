import React from 'react';
import { useSelector } from 'react-redux';

export default function FinishSale() {
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

  return (
    <div className="summary-items">
      <div className="wrapper-items-infos">
        <h3 className="items-infos">{`Subtotal(${sale.quantity} ${
          sale.quantity === 1 ? 'item' : 'itens'
        })`}</h3>
        <h3 className="items-price">{`R$ ${sale.price.toFixed(2)}`}</h3>
      </div>
      <hr className="line" />
      <div className="wrapper-items-infos">
        <h3 className="items-infos">Cupom de desconto</h3>
        <input type="text" placeholder="Digite o cupom" />
      </div>
      <hr className="line" />
      <div className="wrapper-items-infos">
        <h3 className="items-infos">Desconto</h3>
        <h3 className="items-price">valor desconto</h3>
      </div>
      <hr className="line" />
      <div className="wrapper-items-infos">
        <h3 className="items-infos">Valor total</h3>
        <h3 className="items-total-price">{`R$ ${sale.price.toFixed(2)}`}</h3>
      </div>
    </div>
  );
}
