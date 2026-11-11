import React from 'react';
import Arrow from './Arrow';

export default function Hero({ onOpenAccount }) {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="dot" /> БОЛЬШЕ ЖИЗНИ. МЕНЬШЕ СЛОЖНОСТЕЙ.
        </div>
        <h1>
          Ваши деньги.
          <br />
          Ваши планы.
          <br />
          <span>Ваш зелёный свет.</span>
        </h1>
        <p className="intro">
          Банк, с которым легко двигаться вперёд.
          <br className="desktop" /> Платите, копите и воплощайте то, что важно вам.
        </p>
        <button className="primary" onClick={onOpenAccount}>
          Открыть карту <Arrow />
        </button>
        <div className="hero-note">
          <span>✓</span> Бесплатное обслуживание. Без лишних условий.
        </div>
      </div>
      <div
        className="hero-art"
        aria-label="Дебетовая карта Verde с бесплатным обслуживанием"
      >
        <div className="art-top">
          <span>СОЗДАНО ДЛЯ ВАШЕГО КАЖДОГО ДНЯ</span>
          <span>↗</span>
        </div>
        <div className="orbit o1" />
        <div className="orbit o2" />
        <div className="bank-card">
          <div className="card-head">
            <b>verde.</b>
            <span>debit ↗</span>
          </div>
          <div className="chip">
            <i />
            <i />
            <i />
          </div>
          <div className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 2086</div>
          <div className="card-bottom">
            <span>YOUR NEXT CHAPTER</span>
            <b>МИР</b>
          </div>
        </div>
        <div className="cashback">
          <span className="cashback-icon">↗</span>
          <div>
            <small>Приятно возвращать</small>
            <strong>до 5% кешбэка</strong>
          </div>
          <span className="cashback-plus">+</span>
        </div>
        <div className="art-bottom">
          <span>МЕНЬШЕ ГРАНИЦ</span>
          <span>БОЛЬШЕ ВОЗМОЖНОСТЕЙ</span>
        </div>
      </div>
    </section>
  );
}
