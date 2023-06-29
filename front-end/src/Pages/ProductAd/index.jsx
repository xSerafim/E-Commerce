import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';

import { handleFetch } from '../../Services/Api';
import { method } from '../../Utils/Methods';
import { url } from '../../Utils/Endpoints';

import ProductDetails from '../../Components/Cards/ProductDetails';
import './style.css';

export default function ProductAd() {
  const [ad, setAd] = useState('');
  const { id } = useParams();

  useEffect(() => {
    handleFetch(method.GET, url.adById(id)).then(({ message }) =>
      setAd(message)
    );
  }, []);

  return (
    <div className="home-container">
      <Header />
      {ad && <ProductDetails data={ad} />}
    </div>
  );
}
