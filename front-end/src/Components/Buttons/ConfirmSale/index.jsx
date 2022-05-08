import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SweetAlert from 'react-bootstrap-sweetalert';

import { handleFetch } from '../../../Services/Api';
import { url } from '../../../Utils/Endpoints';
import { method } from '../../../Utils/Methods';
import { saveItem } from '../../../Store/Actions/saveItem';

export default function ConfirmSaleBtn() {
  const [isLogged, setIsLogged] = useState(false);
  const [soldOut, setSoldOut] = useState(null);
  const [quantityInStock, setQuantityInStock] = useState(0);
  const dispatch = useDispatch();

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

    if (response.message.includes('token')) return navigate('/login');

    if (Array.isArray(response.message)) {
      const indexOfSoldOutItem = response.message.findIndex((e) => e < 0);
      setSoldOut(indexOfSoldOutItem);

      return setQuantityInStock(
        response.message[indexOfSoldOutItem] +
          items[indexOfSoldOutItem].quantity
      );
    }

    return setIsLogged(true);
  };

  return (
    <div className="sale-btn-container">
      {isLogged && (
        <SweetAlert
          success
          title="Compra efetuada com sucesso!"
          onConfirm={() => {
            dispatch(saveItem([]));
            localStorage.setItem('cartItems', JSON.stringify([]));
            navigate('/');
          }}
        />
      )}
      {typeof soldOut === 'number' && (
        <SweetAlert
          danger
          title="Erro ao efetuar a compra"
          confirmBtnText="OK"
          onConfirm={() => setSoldOut(null)}
        >
          {`Temos apenas ${quantityInStock} ${
            quantityInStock === 1 ? 'unidade' : 'unidades'
          } do produto ${items[soldOut].name} `}
        </SweetAlert>
      )}
      <button className="confirm-sale" type="button" onClick={handleClick}>
        Finalizar compra
      </button>
    </div>
  );
}
