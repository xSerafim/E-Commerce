import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManagerSales from '../Components/ManagerSales';
import Cart from '../Pages/Cart';
import DashBoard from '../Pages/DashBoard';
import Favorites from '../Pages/Favorites';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ProductAd from '../Pages/ProductAd';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductAd />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/sales" element={<ManagerSales />} />
    </Routes>
  );
}
