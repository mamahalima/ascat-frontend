import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getGallery } from "../services/strapigallery";

export default async function Gallery() {
  const galleries = await getGallery();

  const firstGallery = galleries?.[0];

  if (!firstGallery) return null;

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">
          Galerie
        </h2>

        <div className="gallery-divider"></div>

        <Link
          href="/gallery"
          className="gallery-link"
        >
          Voir toute la galerie
          <FaArrowRight className="gallery-icon" />
        </Link>
      </div>

      <div className="gallery-container">
        {firstGallery.Cover?.slice(0, 6).map((image) => (
          <div
            key={image.id}
            className="gallery-card"
          >
            <img
              src={image.url}
              alt={image.name}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}