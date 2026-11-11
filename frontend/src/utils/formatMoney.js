const hryvniaNumberFormatter = new Intl.NumberFormat('ru-RU', {
  maximumFractionDigits: 0,
});
export function formatMoney(amount) {
  return `${hryvniaNumberFormatter.format(amount)} ₴`;
}
