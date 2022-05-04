import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { handleFetch } from '../../Services/Api';
import { method } from '../../Utils/Methods';
import { url } from '../../Utils/Endpoints';
import ProductCard from '../../Components/Cards/ProductCard';
import './style.css';

export default function Home() {
  const [ads, setAds] = useState('');

  useEffect(() => {
    handleFetch(method.GET, url.ads).then(({ data: { message } }) =>
      setAds(message)
    );
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="home-products">
        {ads ? (
          ads.map(({ items, adId }) => (
            <ProductCard
              key={adId}
              adId={adId}
              name={items[0].name}
              image={items[0].image}
              price={items[0].price}
            />
          ))
        ) : (
          <span>Carregando...</span>
        )}
      </div>
    </div>
  );
}
