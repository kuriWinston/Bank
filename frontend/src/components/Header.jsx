import React from 'react';
import Arrow from './Arrow';
import Nav from './Nav';
export default function Header({ onOpenAccount }) {
  return (
    <header className="header wrap">
      <a href="#" className="brand" aria-label="Verde — главная">
        <span className="brandmark">v</span>verde<span className="brand-dot">.</span>
      </a>
      <Nav />
      <button className="login" onClick={onOpenAccount}>
        Стать клиентом <Arrow />
      </button>
    </header>
  );
}
