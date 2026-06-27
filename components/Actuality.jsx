import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { getActualities } from "../services/strapiactu";

export default async function Actuality() {
  const actualities = await getActualities();

  const featured = actualities.find(
    (item) => item.Featured === true
  );

  const others = actualities
    .filter((item) => item.id !== featured?.id)
    .sort(
      (a, b) => new Date(b.Date) - new Date(a.Date)
    )
    .slice(0, 2);

  return (
    <section className="actualities">
      <div className="actualities-header">
        <h2 className="actualities-title">
          Actualités récentes
        </h2>

        <Link
          href="/actuality"
          className="actualities-link"
        >
          Voir toutes les actualités
          <FaArrowRight />
        </Link>
      </div>

      <div className="actualities-container">

        {/* Actualité mise en avant */}
        {featured && (
          <div className="actuality-card featured-card">
            {featured.cover?.[0] && (
              <img
                className="actuality-image"
                src={featured.cover[0].url}
                alt={featured.Title}
              />
            )}

            <div className="actuality-content">
              <div className="actuality-meta">
                <span className="actuality-subtitle">
                  {featured.Subtitle}
                </span>

                <span className="actuality-date">
                  {featured.Date}
                </span>
              </div>

              <h3 className="actuality-card-title">
                {featured.Title}
              </h3>

              <p className="actuality-description">
                {featured.Description?.[0]?.children?.[0]?.text}
              </p>
            </div>
          </div>
        )}

        {/* Les autres actualités */}
        {others.map((actuality) => (
          <div
            key={actuality.id}
            className="actuality-card"
          >
            {actuality.cover?.[0] && (
              <img
                className="actuality-image"
                src={actuality.cover[0].url}
                alt={actuality.Title}
              />
            )}

            <div className="actuality-content">
              <div className="actuality-meta">
                <span className="actuality-subtitle">
                  {actuality.Subtitle}
                </span>

                <span className="actuality-date">
                  {actuality.Date}
                </span>
              </div>

              <h3 className="actuality-card-title">
                {actuality.Title}
              </h3>

              <p className="actuality-description">
                {actuality.Description?.[0]?.children?.[0]?.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}