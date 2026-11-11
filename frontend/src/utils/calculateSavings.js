export const DEMO_ANNUAL_RATE = 0.145;
// Simple interest: no capitalization or taxes. This is a demo, not a bank offer.
export function calculateSavingsIncome(amount, months) {
  return (amount * DEMO_ANNUAL_RATE * months) / 12;
}
