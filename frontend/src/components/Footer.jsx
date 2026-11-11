import React from 'react';

export default function Footer({}) {
  return (
    <footer className="wrap">
      <div className="footer-top">
        <a className="brand" href="#">
          verde.
        </a>
        <span>Ваш зелёный свет.</span>
        <a href="#products">К продуктам ↑</a>
      </div>
      <p>
        © 2026 Verde. Концепт банковского сайта. Вымышленный банк: продукты, ставки и
        преимущества приведены для демонстрации. Сайт не оказывает финансовые услуги и не
        собирает персональные данные.
      </p>
    </footer>
  );
}
