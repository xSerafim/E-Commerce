import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <header className="full-header">
      <nav className="primary-header">
        <div className="header-logo">
          <Link className="link" to="/">
            Concept
          </Link>
        </div>
        <div className="mobile-menu">
          <i className="fa-solid fa-bars" />
        </div>
        <form className="search-desktop">
          <input
            className="search-input"
            placeholder="O que você procura?"
            type="text"
          />
          <button className="search-button" type="submit">
            <i className="fa-solid fa-magnifying-glass search-logo" />
          </button>
        </form>
        <ul className="nav-list">
          <li className="header-home">
            <Link className="link" to="/">
              <i className="fa-solid fa-house" />
            </Link>
          </li>
          <li className="login">
            <Link className="link" to="/login">
              <i className="fa-solid fa-user" />
            </Link>
          </li>
          <li className="cart">
            <Link className="link" to="/login">
              <i className="fa-solid fa-cart-shopping" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="search-box-mobile">
        <form className="search-mobile">
          <input
            className="search-input"
            placeholder="O que você procura?"
            type="text"
          />
          <button className="search-button" type="submit">
            <i className="fa-solid fa-magnifying-glass search-logo" />
          </button>
        </form>
      </div>
    </header>
  );
}
