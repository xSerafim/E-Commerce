import React, { useEffect, useState } from 'react';

import { handleFetch } from '../../Services/Api';
import { url } from '../../Utils/Endpoints';
import { method } from '../../Utils/Methods';
import BarChart from '../Charts/BarChart';
import Header from '../Header';

export default function ManagerSales() {
  const [sales, setSales] = useState('');
  const [data, setData] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    handleFetch(
      method.GET,
      url.sales,
      {},
      {
        authorization: token,
      }
    ).then(({ message }) => setSales(message));
  }, []);

  useEffect(() => {
    if (Array.isArray(sales)) {
      // const quantityOfItems = [];
      // const newSale = sales.map((sale) => sale.sale);

      // console.log(newSale);
      const totalSales = sales.reduce((acc, curr) => {
        if (acc.length === 0) {
          return curr.sale;
        }
        const quantityOfItems = [];

        curr.sale.forEach(({ itemId, quantity }) => {
          const currItem = acc.find((item) => item.itemId === itemId);
          if (currItem) {
            return quantityOfItems.push({
              itemId,
              quantity: currItem.quantity + quantity,
            });
          }
          return quantityOfItems.push({
            itemId,
            quantity: currItem.quantity + quantity,
          });
        });

        return quantityOfItems;
      }, []);
      setData({
        labels: totalSales.map((sale) => sale.itemId),
        datasets: [
          {
            label: 'Quantidade total de venda',
            data: totalSales.map((sale) => sale.quantity),
          },
        ],
      });
    }
  }, [sales]);
  console.log(data);

  return (
    <div>
      <Header />
      <h1>Área administrativa</h1>
      {data && <BarChart chartData={data} />}
    </div>
  );
}
