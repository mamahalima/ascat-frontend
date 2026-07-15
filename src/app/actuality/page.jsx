import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { getActualities } from "../../../services/strapiactu";

function renderBlocks(blocks) {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) =>
      block?.children
        ?.map((child) => child.text || "")
        .join("")
    )
    .join(" ");
}

export default async function ActualityPage() {
  const actualities = await getActualities();

  const normalized = actualities.map((item) => ({
    ...item,
    slug: item.slug || item.attributes?.slug,
  }));

  const featured =
    normalized.find((item) => item.Featured === true) ||
    normalized[0];

  const others = normalized.filter(
    (item) => item.id !== featured?.id
  );

  return (
    <main className="actuality-page">
      <section className="actuality-page-hero">
        <div className="page-container">
          <h1 className="actuality-page-heading">
            Actualités
          </h1>

          <p className="actuality-page-subtitle">
            Retrouvez les dernières nouvelles,
            événements et actions de l'association.
          </p>
        </div>
      </section>

      <div className="page-container">

        {featured && (
          <section className="featured-news">

            {featured.cover?.[0] && (
              <img
                src={featured.cover[0].url}
                alt={featured.Title}
                className="featured-news-image"
              />
            )}

            <div className="featured-news-content">

              <span className="featured-badge">
                À la une
              </span>

              <h2 className="featured-news-title">
                {featured.Title}
              </h2>

              <div className="news-meta">

                {featured.Date && (
                  <span>
                    <FaCalendarAlt />
                    {featured.Date}
                  </span>
                )}

                {featured.Time && (
                  <span>
                    <FaClock />
                    {featured.Time}
                  </span>
                )}

                {featured.Localisation && (
                  <span>
                    <FaMapMarkerAlt />
                    {featured.Localisation}
                  </span>
                )}

              </div>

              <p className="featured-news-description">
                {renderBlocks(featured.Description).slice(0, 250)}
                ...
              </p>
              <Link
                href={`/actuality/${featured.slug}`}
                className="news-button"
              >
                Lire l'article
              </Link>

            </div>
          </section>
        )}
        <section className="news-grid">

          {others.map((item) => (
            <article key={item.id} className="news-card">

              {item.cover?.[0] && (
                <img
                  src={item.cover[0].url}
                  alt={item.Title}
                  className="news-card-image"
                />
              )}

              <div className="news-card-content">

                <h3 className="news-card-title">
                  {item.Title}
                </h3>

                <div className="news-meta">

                  {item.Date && (
                    <span>
                      <FaCalendarAlt />
                      {item.Date}
                    </span>
                  )}

                  {item.Localisation && (
                    <span>
                      <FaMapMarkerAlt />
                      {item.Localisation}
                    </span>
                  )}

                </div>

                <p className="news-card-description">
                  {renderBlocks(item.Description).slice(0, 120)}
                  ...
                </p>
                <Link
                  href={`/actuality/${item.slug}`}
                  className="news-card-link"
                >
                  Lire la suite
                </Link>

              </div>
            </article>
          ))}

        </section>

      </div>
    </main>
  );
}