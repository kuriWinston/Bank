import React from 'react';
import SavingsCalculator from './SavingsCalculator';
export default function Savings({ onOpenAccount }) {
  return (
    <section className="savings wrap section" id="savings">
      <div className="savings-copy">
        <span className="eyebrow">МАЛЕНЬКИЙ ШАГ К БОЛЬШОЙ ЦЕЛИ</span>
        <h2>
          Пока вы живёте,
          <br />
          ваши деньги растут.
        </h2>
        <p>
          Посмотрите, сколько можно накопить.
          <br />
          Без сложных формул — всё перед вами.
        </p>
        <span className="rate">
          14,5% <small>годовых · демо-ставка</small>
        </span>
      </div>
      <SavingsCalculator onOpenAccount={onOpenAccount} />
    </section>
  );
}
