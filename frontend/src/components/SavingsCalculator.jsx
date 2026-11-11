import React, { useState } from 'react';
import Arrow from './Arrow';
import { formatMoney } from '../utils/formatMoney';
import { calculateSavingsIncome } from '../utils/calculateSavings';
const AVAILABLE_TERMS = [3, 6, 12];
export default function SavingsCalculator({ onOpenAccount }) {
  const [amount, setAmount] = useState(300000);
  const [months, setMonths] = useState(12);
  const income = calculateSavingsIncome(amount, months);
  return (
    <div className="calculator">
      <label htmlFor="amount">
        Хочу отложить <strong>{formatMoney(amount)}</strong>
      </label>
      <input
        id="amount"
        type="range"
        min="10000"
        max="1000000"
        step="10000"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <div className="range-labels">
        <span>10 000 ₴</span>
        <span>1 000 000 ₴</span>
      </div>
      <fieldset>
        <legend>На какой срок</legend>
        <div className="terms">
          {AVAILABLE_TERMS.map((n) => (
            <button
              key={n}
              aria-pressed={months === n}
              className={months === n ? 'active' : ''}
              onClick={() => setMonths(n)}
            >
              {n} мес.
            </button>
          ))}
        </div>
      </fieldset>
      <div className="result" aria-live="polite">
        <span>
          К концу срока<strong>{formatMoney(amount + income)}</strong>
        </span>
        <span className="income">
          +{formatMoney(income)}
          <small>ваш доход</small>
        </span>
      </div>
      <button className="primary" onClick={onOpenAccount}>
        Начать копить <Arrow />
      </button>
      <p className="disclaimer">
        Пример расчёта без капитализации и налогов. Не является офертой.
      </p>
    </div>
  );
}
