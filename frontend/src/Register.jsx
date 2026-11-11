import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    try {
      const response = await fetch("/api/name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, last_name: lastName, email, consent }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Ошибка отправки");
      }

      setMessage("Спасибо! Данные сохранены.");
      setName("");
      setLastName("");
      setEmail("");
      setConsent(false);
    } catch (error) {
      setMessage(error.message || "Не удалось отправить данные.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="form-card" aria-labelledby="form-title">
        <div className="brand-mark" aria-hidden="true">Регистрация</div>
        <p className="eyebrow">Verde · приветствие</p>
        <h1 id="form-title">Давайте знакомиться</h1>
        <p className="intro">Введите свои данные, чтобы продолжить</p>

        <form className="name-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Имя</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={20}
              autoComplete="given-name"
              placeholder="Например, Иван"
              required
            />
          </label>

          <label className="field">
            <span>Фамилия</span>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              maxLength={20}
              autoComplete="family-name"
              placeholder="Например, Иванов"
              required
            />
          </label>

          <label className="field">
            <span>Почта</span>
            <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            maxLength={80}
            autoComplete="family-name"
            placeholder="Например, ivanivanov@gmail.com"
            required
            />
          </label>

          <label className="consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
            />
            <span>Я согласен отправить указанные данные</span>
          </label>

          <button className="submit-button" disabled={busy || !consent}>
            {busy ? "Отправляем…" : "Продолжить"}
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <p className="status-message" role="status">{message}</p>
        <p className="privacy-note">Ваши данные используются только для продолжения</p>
      </section>
    </main>
  );
}
