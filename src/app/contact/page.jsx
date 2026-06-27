"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);
   
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Nous contacter</h1>
        <p>
          Une question, une demande d'information ou un projet ?
          N'hésitez pas à nous contacter.
        </p>
      </div>

      <div className="contact-container">
      <div className="contact-info">

<div className="contact-card">
  <strong className="info">📍 Adresse</strong>
  <p>
    1140 boulevard de l'Ariane,<br />
    06300 NICE Bat 3 escalier 8
  </p>
</div>

<div className="contact-card">
  <strong className="info">📞 Téléphone</strong>
  <p>0033614368981</p>
</div>

<div className="contact-card">
  <strong className="info">✉️ Email</strong>
  <p>communication.ladalmanazili@gmail.com</p>
</div>

</div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Nom" required />

          <input name="email" type="email" placeholder="Email" required />

          <input name="subject" type="text" placeholder="Sujet" required />

          <textarea
            name="message"
            rows="6"
            placeholder="Votre message"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {success && (
            <p style={{ color: "green" }}>
              Message envoyé avec succès ✔
            </p>
          )}
        </form>
      </div>
    </section>
  );
}