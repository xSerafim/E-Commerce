import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <div className="full-header">
      <div className="primary-header">
        <div className="header-logo">
          <Link to="/">Loja de Roupas</Link>
        </div>
        <div className="header-search" />
        <div className="login-cart">
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
          <div className="cart">
            <Link to="/login">Carrinho</Link>
          </div>
        </div>
      </div>
      <div className="header-menu">
        <nav className="navigation">
          <span>Masculino</span>
          <span>Feminino</span>
        </nav>
        <form>
          <input placeholder="O que você procura?" type="text" />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass search-logo" />
          </button>
        </form>
      </div>
    </div>
  );
}
