import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef(null);
  function openAccountDemo(event) {
    triggerRef.current = event.currentTarget;
    setIsModalOpen(true);
  }
  function closeAccountDemo() {
    setIsModalOpen(false);
    triggerRef.current?.focus();
  }
  return (
    <>
      <Header onOpenAccount={openAccountDemo} />
      <Main onOpenAccount={openAccountDemo} />
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={closeAccountDemo} />
    </>
  );
}
