"use client";

import { useState } from "react";

export default function AdhererPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      profession: e.target.profession.value,
      message: e.target.message.value,
    };

    try {
     
      await fetch("https://script.google.com/macros/s/AKfycbwZKtvcoHYt5Q6sSoJ2JV4dXB-YuwUOgy4uKwkzwyXgqPald9FViUdTX03JT-tUFfmX/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      e.target.reset();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <main className="membership-page">

      <section className="membership-hero">
        <div className="page-container">
          <h1 className="membership-title">
            Adhérer à l'ASCAT
          </h1>

          <p className="membership-subtitle">
            Rejoignez notre association et participez
            activement à nos projets solidaires,
            éducatifs et culturels.
          </p>
        </div>
      </section>

      <section className="membership-benefits page-container">

        <div className="membership-card">
          <h3>Participer</h3>
          <p>
            Prenez part aux activités et aux événements
            organisés par l'association.
          </p>
        </div>

        <div className="membership-card">
          <h3>Soutenir</h3>
          <p>
            Contribuez au développement des projets
            destinés à la communauté.
          </p>
        </div>

        <div className="membership-card">
          <h3>Partager</h3>
          <p>
            Rencontrez d'autres membres et participez
            à une dynamique collective.
          </p>
        </div>

      </section>

      <section className="membership-form-section">
        <div className="page-container">

          <h2 className="membership-form-title">
            Formulaire d'adhésion
          </h2>

          {success && (
            <div className="membership-success">
              Votre demande a été envoyée avec succès.
            </div>
          )}

          <form
            className="membership-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="Ville"
            />
<input
  type="text"
  name="profession"
  placeholder="Profession"
/>
            <textarea
              name="message"
              rows="5"
              placeholder="Votre message"
            />

            <button type="submit">
              {loading
                ? "Envoi..."
                : "Envoyer ma demande"}
            </button>

          </form>

        </div>
      </section>

    </main>
  );
}