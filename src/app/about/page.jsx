import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getAbout } from "../../../services/strapiabout";

export default async function AboutPage() {
  const abouts = await getAbout();

  if (!abouts || abouts.length === 0) {
    return (
      <main className="about-page">
        Contenu indisponible
      </main>
    );
  }

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="page-container">
          <span className="about-label">
            QUI SOMMES-NOUS ?
          </span>

          <h1 className="about-title">
            À propos de LADAL MANAAZILI
          </h1>

          <p className="about-subtitle">
            L'Association LADAL MANAAZILI œuvre
            pour renforcer les liens de solidarité,
            promouvoir la culture et accompagner les
            initiatives éducatives au sein de la
            communauté.
          </p>
        </div>
      </section>

      {abouts.map((about, index) => {
        const description =
          about?.Description?.[0]?.children?.[0]
            ?.text ?? "";

        const coverUrl =
          about?.Cover?.[0]?.url ?? "";

        return (
          <section
            key={about.id}
            className="about-section"
          >
            <div className="page-container">
              <div
                className={`about-content ${
                  index % 2 !== 0
                    ? "about-reverse"
                    : ""
                }`}
              >
                <div className="about-text">
                  <h2>{about?.Title}</h2>
                  <p>{description}</p>
                </div>
                <div className="about-image-container">
                  {coverUrl && (
                    <img
                      src={coverUrl}
                      alt={about?.Title}
                      className="about-image"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <section className="about-values">
        <div className="page-container">
          <h2 className="about-values-title">
            Nos valeurs
          </h2>

          <div className="about-values-grid">
            <article className="about-value-card">
              <h3>Solidarité</h3>

              <p>
                Encourager l'entraide et le soutien
                entre les membres de la communauté.
              </p>
            </article>

            <article className="about-value-card">
              <h3>Culture</h3>

              <p>
                Préserver et transmettre notre
                patrimoine culturel aux générations
                futures.
              </p>
            </article>

            <article className="about-value-card">
              <h3>Éducation</h3>

              <p>
                Favoriser l'accès au savoir et
                accompagner les initiatives
                éducatives.
              </p>
            </article>
          </div>
        </div>
             <div className="about-c-boutton-container">
                 <Link
                    href="/contact"
                    className="about-button"
                  >
                    Nous contacter
                    <FaArrowRight />
                  </Link>
              </div>
      </section>
    </main>
  );
}