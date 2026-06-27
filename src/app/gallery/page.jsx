import { getGallery } from "../../../services/strapigallery";

export default async function Gallery() {
  const galleries = await getGallery();

  return (
    <main className="gallery-page">
      <section className="gallery-page-hero">
        <h1>Galerie</h1>

        <p>
          Découvrez en images les actions menées par notre association
          auprès des bénéficiaires, des familles et des communautés.
        </p>
      </section>

      {galleries?.map((gallery) => (
        <section
          key={gallery.id}
          className="gallery-program"
        >
          <div className="gallery-program-header">
            <h2 className="gallery-program-title">
              {gallery.Title}
            </h2>

            <div className="gallery-program-divider"></div>

            <div className="gallery-program-description">
              {gallery.Description?.map((block, index) => (
                <p key={index}>
                  {block.children
                    ?.map((child) => child.text)
                    .join("")}
                </p>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {gallery.Cover?.slice(0, 6).map((image) => (
              <div
                key={image.id}
                className="gallery-card"
              >
                <img
                  src={image.url}
                  alt={image.alternativeText || image.name}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>

          {gallery.DriveLink && (
            <div className="gallery-drive-container">
              <a
                href={gallery.DriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-drive-button"
              >
                Voir l'album complet
              </a>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}