import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <div className="full-header">
      <div className="primary-header">
        <div className="header-logo">Loja de Roupas</div>
        <div className="header-search">
          <form>
            <input placeholder="O que você procura?" type="text" />
            <button type="submit">pesquisar</button>
          </form>
        </div>
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
          <span>categorias</span>
        </nav>
      </div>
    </div>
  );
}
