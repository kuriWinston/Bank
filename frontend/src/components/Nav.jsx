import React, { useState } from 'react';
export default function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav
        className={menu ? 'nav show' : 'nav'}
        id="main-navigation"
        aria-label="Главная навигация"
      >
        <a href="#products" onClick={() => setMenu(false)}>
          Продукты
        </a>
        <a href="#savings" onClick={() => setMenu(false)}>
          Накопления
        </a>
        <a href="#about" onClick={() => setMenu(false)}>
          О банке
        </a>
      </nav>
      <button
        className="menu"
        aria-controls="main-navigation"
        aria-label={menu ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
      >
        {menu ? '×' : <span className="menu-lines" aria-hidden="true" />}
      </button>
    </>
  );
}
