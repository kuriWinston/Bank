import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import Products from './Products';
import Savings from './Savings';
import About from './About';
export default function Main({ onOpenAccount }) {
  return (
    <main>
      <Hero onOpenAccount={onOpenAccount} />
      <Benefits />
      <Products onOpenAccount={onOpenAccount} />
      <Savings onOpenAccount={onOpenAccount} />
      <About onOpenAccount={onOpenAccount} />
    </main>
  );
}
