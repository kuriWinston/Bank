import React from 'react';
import Arrow from './Arrow';

export default function Products({ onOpenAccount }) {
  return (
    <section className="products wrap section" id="products">
      <div className="section-heading">
        <div>
          <span className="eyebrow">НА КАЖДЫЙ ДЕНЬ И НА БУДУЩЕЕ</span>
          <h2>Всё нужное. Ничего лишнего.</h2>
        </div>
        <span className="section-index">01 / ПРОДУКТЫ</span>
      </div>
      <div className="product-grid">
        <article className="product light">
          <span className="product-icon">▤</span>
          <h3>Карта для вашей жизни</h3>
          <p>Кофе по пути, большие покупки и маленькие радости. С выгодой каждый день.</p>
          <button className="text-button" onClick={onOpenAccount}>
            Выбрать карту <Arrow />
          </button>
        </article>
        <article className="product dark">
          <span className="product-icon">↗</span>
          <h3>Планы растут вместе с вами</h3>
          <p>Накопительный счёт с понятным доходом. Ваша цель становится ближе.</p>
          <a className="text-button" href="#savings">
            Рассчитать доход <Arrow />
          </a>
        </article>
        <article className="product cream">
          <span className="product-icon">◇</span>
          <h3>Больше времени на своё</h3>
          <p>Удобное управление деньгами, переводы и платежи — в одном месте.</p>
          <button className="text-button" onClick={onOpenAccount}>
            Познакомиться с Verde <Arrow />
          </button>
        </article>
      </div>
    </section>
  );
}
