import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  const navList = document.getElementsByClassName('nav-list');
  const mobileLinks = document.getElementsByClassName('mobile-link');
  const searchBox = document.getElementsByClassName('search-box-mobile');

  const animateLinks = () => {
    for (let i = 0; i < mobileLinks.length; i += 1) {
      if (mobileLinks[i].style.animation) {
        mobileLinks[i].style.animation = '';
      } else {
        mobileLinks[i].style.animation = `navLinkFade 0.5s ease forwards ${
          i / 7 + 0.3
        }s`;
      }
    }
  };

  return (
    <header className="full-header">
      <nav className="primary-header">
        <button
          onClick={() => {
            navList[0].classList.toggle('active');
            searchBox[0].classList.toggle('active');
            animateLinks();
          }}
          type="button"
          className="mobile-menu"
        >
          <i className="fa-solid fa-bars" />
        </button>
        <Link className="cart-mobile link" to="/cart">
          <i className="fa-solid fa-cart-shopping" />
        </Link>
        <div className="header-logo">
          <Link className="link" to="/">
            Concept
          </Link>
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
        <div className="nav-container">
          <ul className="nav-list">
            <li className="header-home mobile-link">
              <Link className="link" to="/">
                <i className="fa-solid fa-house" />
              </Link>
            </li>
            <li className="login mobile-link">
              <Link className="link" to="/login">
                <i className="fa-solid fa-user" />
              </Link>
            </li>
            <li id="cart" className="cart mobile-link">
              <Link className="link" to="/cart">
                <i className="fa-solid fa-cart-shopping" />
              </Link>
            </li>
            <li className="favorite mobile-link">
              <Link className="link" to="/favorites">
                <i className="fa-solid fa-heart" />
              </Link>
            </li>
          </ul>
        </div>
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
