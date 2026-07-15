import {
  FaMapMarkerAlt,
  FaClock,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link"
import { getEvents } from "../services/strapi";


export default async function UpcomingEvents() {
  const events = await getEvents();

  const upcomingEvents = events.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const nextThree = upcomingEvents.slice(0, 3);

  return (
    <section className="upcoming-events">
      <div className="upcoming-events-header">
  <h2 className="upcoming-events-title">
    Prochains événements
  </h2>
      <Link
        href="/events"
        className="upcoming-events-link"
      >
        Voir tous les événements  <FaArrowRight />
      </Link>
  </div>

  <div className="events-container">
    {nextThree.map((event) => {
      const date = new Date(event.date);

      const day = date.getDate().toString().padStart(2, "0");

      const month = date.toLocaleDateString("fr-FR", {
        month: "short",
      }).toUpperCase();

      return (
        <div key={event.id} className="event-card">
          <div className="event-image">
            <span className="event-day">
              {day}
            </span>

            <span className="event-month">
              {month}
            </span>
          </div>
          <div className="event-content">
              <h3 className="event-title">
                  {event.title}
              </h3>
               <p className="event-location">
                <FaTag className="event-icon" />
                 Thème :{" "}
                 {event.description?.[0]?.children?.[0]?.text}
               </p>
               <p className="event-location">
                <FaMapMarkerAlt className="event-icon" />
                 {event.localisation}
               </p>

               <p className="event-time">
               <FaClock className="event-icon" />
                 {event.time}
               </p>
          </div>
        </div>
      );
    })}
  </div>
</section>
  );
}