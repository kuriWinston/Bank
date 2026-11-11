import React from 'react';
import Arrow from './Arrow';

export default function About({ onOpenAccount }) {
  return (
    <section className="about wrap" id="about">
      <div className="brandmark">v</div>
      <h2>
        Хороший банк — тот,
        <br />
        который делает жизнь проще.
      </h2>
      <p>
        Понятные продукты. Внимание к деталям.
        <br />И больше свободы для того, что вы любите.
      </p>
      <button className="primary" onClick={onOpenAccount}>
        Давайте знакомиться <Arrow />
      </button>
    </section>
  );
}
