import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { getEvents } from "../../../services/strapi";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="events-list-page">
      <section className="events-list-hero">
        <div className="page-container">
          <span className="events-list-label">
            NOS RENCONTRES
          </span>

          <h1 className="events-list-title">
            Nos Événements
          </h1>

          <p className="events-list-subtitle">
            Découvrez les prochains rendez-vous,
            conférences, activités culturelles et
            événements organisés par LADAL MANAAZILI.
          </p>
        </div>
      </section>

      <section className="events-list-section">
        <div className="page-container">
          <div className="events-list-grid">
            {events.map((event) => (
              <article
                key={event.id}
                className="events-list-card"
              >
                {event.cover?.length > 0 && (
                  <img
                    src={event.cover[0].url}
                    alt={event.title}
                    className="events-list-image"
                  />
                )}

                <div className="events-list-content">
                  <h2 className="events-list-card-title">
                    {event.title}
                  </h2>

                  <p className="events-list-description">
                    {event.description?.[0]?.children?.[0]?.text}
                  </p>

                  <div className="events-list-details">
                    <p className="events-list-detail">
                      <FaCalendarAlt className="events-list-icon" />
                      {event.date}
                    </p>

                    <p className="events-list-detail">
                      <FaClock className="events-list-icon" />
                      {event.time}
                    </p>

                    <p className="events-list-detail">
                      <FaMapMarkerAlt className="events-list-icon" />
                      {event.localisation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}