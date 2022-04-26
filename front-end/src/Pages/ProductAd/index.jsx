import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';

import { handleFetch } from '../../Services/Api';
import { method } from '../../Utils/Methods';
import { url } from '../../Utils/Endpoints';
import './style.css';
import ProductCard from '../../Components/Cards/ProductCard';

export default function ProductAd() {
  const [ad, setAd] = useState('');
  const { id } = useParams();

  useEffect(() => {
    handleFetch(method.GET, url.adById(id)).then(({ data: { message } }) =>
      setAd(message)
    );
  }, []);

  return (
    <div className="home-container">
      <Header />
      {ad && (
        <ProductCard
          key={ad[0].adId}
          adId={ad[0].adId}
          name={ad[0].items[0].name}
          image={ad[0].items[0].image}
          price={ad[0].items[0].price}
        />
      )}
    </div>
  );
}
