import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';

export default function DashBoard() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Área administrativa</h1>
      <button type="button" onClick={() => navigate('/sales')}>
        Vendas
      </button>
    </div>
  );
}
