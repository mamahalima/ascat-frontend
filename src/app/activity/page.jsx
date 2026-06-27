import Link from "next/link";
import {
  FaArrowRight,
  FaHandsHelping,
  FaBookOpen,
  FaMosque,
  FaGlobeAfrica,
  FaGraduationCap,
  FaHandHoldingHeart,
} from "react-icons/fa";

import { getActivities } from "../../../services/strapiactivity";

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

export default async function ActivityPage() {
  const activities = await getActivities();

  if (!activities?.length) {
    return (
      <main className="activity-page-main">
        Aucune activité disponible
      </main>
    );
  }

  const icons = [
    <FaHandsHelping />,
    <FaBookOpen />,
    <FaMosque />,
    <FaGlobeAfrica />,
    <FaGraduationCap />,
    <FaHandHoldingHeart />,
  ];

  return (
    <main className="activity-page-main">
      <section className="activity-page-hero">
        <div className="page-container">
          <h1 className="activity-page-heading">
            Nos Activités
          </h1>

          <p className="activity-page-subtitle">
            Découvrez les différentes actions
            menées par l'ASCAT au service de la
            communauté.
          </p>
        </div>
      </section>

      {activities.map((item, index) => {
        const title = item?.Title || "";
        const description = renderBlocks(
          item?.Description
        );

        const coverUrl =
          item?.Cover?.[0]?.url || "";

        return (
          <section
            key={item.id}
            id={item?.Slug}
            className="activity-page-section"
          >
            <div className="page-container">
              <div
                className={`activity-page-content ${
                  index % 2 !== 0
                    ? "activity-page-content-reverse"
                    : ""
                }`}
              >
                <div className="activity-page-text">
                  <div className="activity-page-icon">
                    {
                      icons[
                        index % icons.length
                      ]
                    }
                  </div>

                  <h2 className="activity-page-title">
                    {title}
                  </h2>

                  <p className="activity-page-description">
                    {description}
                  </p>
                </div>
                {coverUrl && (
                  <div className="activity-page-image-wrapper">
                    <img
                      src={coverUrl}
                      alt={title}
                      className="activity-page-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
            <div className="activity-page-gallery-button-container">
        <Link
          href="/gallery"
          className="activity-page-gallery-button"
        >
          Voir toutes nos photos
        </Link>
      </div>
    </main>
  );
}