import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../../Components/Cards/CartCard';
import './style.css';

import Header from '../../Components/Header';
import FinishSale from '../../Components/FinishSale';
import ConfirmSaleBtn from '../../Components/Buttons/ConfirmSale';

export default function Cart() {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <Header />
      <div className="cart-main">
        {items && items.map((item) => <CartCard key={item.id} item={item} />)}
        <FinishSale />
        <ConfirmSaleBtn />
      </div>
    </div>
  );
}
