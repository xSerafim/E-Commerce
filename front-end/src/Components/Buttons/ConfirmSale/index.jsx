import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { handleFetch } from '../../../Services/Api';
import { url } from '../../../Utils/Endpoints';
import { method } from '../../../Utils/Methods';

export default function ConfirmSaleBtn() {
  const [isLogged, setIsLogged] = useState(false);

  const items = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalPrice);

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const sale = () => {
    const data = {
      sales: items.map(({ id: itemId, quantity }) => ({
        itemId,
        quantity,
      })),
      totalPrice,
    };
    return data;
  };

  const handleClick = async () => {
    const response = await handleFetch(method.POST, url.sales, sale(), {
      authorization: token,
    });

    if (!response) return navigate('/login');

    setIsLogged(true);

    localStorage.setItem('cartItems', JSON.stringify([]));

    return setTimeout(() => {
      setIsLogged(false);

      navigate('/');
    }, 1500);
  };

  return (
    <div className="sale-btn-container">
      {isLogged && <p>Compra efetuada com sucesso!</p>}
      <button className="confirm-sale" type="button" onClick={handleClick}>
        Finalizar compra
      </button>
    </div>
  );
}
