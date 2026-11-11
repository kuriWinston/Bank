import React, { useEffect, useRef } from 'react';
import Register from '../Register.jsx';

export default function DemoModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      dialog.querySelector('input')?.focus();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

  const previousBodyOverflow = document.body.style.overflow;
  const previousHtmlOverflow = document.documentElement.style.overflow;

  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  return () => {
    document.body.style.overflow = previousBodyOverflow;
    document.documentElement.style.overflow = previousHtmlOverflow;
  };
  }, [isOpen])

  return (
    <dialog
      className="registration-modal"  
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className="close"
        aria-label="Закрыть"
        onClick={onClose}
      >
        ×
      </button>

      <span className="brandmark">v</span>
      <h2 id="modal-title">Стать клиентом Verde</h2>

      <Register />
    </dialog>
  );
}