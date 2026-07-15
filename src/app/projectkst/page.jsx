import Link from "next/link";
import {
  FaDonate,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import { getProjectKST } from "../../../services/strapiproject";
export default async function ProjectKSTPage() {
    const projects = await getProjectKST();
  
    if (!projects || projects.length === 0) {
      return (
        <main className="kst-page">
          Projet indisponible
        </main>
      );
    }
    return (
      <main className="kst-page">
        {projects.map((project, index) => {
          const current = Number(
            project?.CurrentAmount ?? 0
          );
  
          const goal = Number(
            project?.GoalAmount ?? 0
          );
          const percentage =
            goal > 0
              ? Math.min(
                  Math.round((current / goal) * 100),
                  100
                )
              : 0;
          const description =
            project?.Description?.[0]?.children?.[0]
              ?.text ?? "";
          const coverUrl =
            project?.Cover?.[0]?.url;
  
          return (<section
            key={project.id}
            className="kst-section"
          >
            <div
              className={`kst-hero page-container ${
                index % 2 !== 0 ? "kst-reverse" : ""
              }`}
            >
              <div className="kst-content">
                <span className="kst-subtitle">
                  {project?.Subtitle ?? ""}
                </span>
          
                <h1 className="kst-title">
                  {project?.Title ?? ""}
                </h1>
          
                <p className="kst-description">
                  {description}
                </p>
                {index === 0 && (
                  <div className="kst-buttons">
                    <Link
                      href="/donation"
                      className="kst-button-primary"
                    >
                      <FaDonate />
                      Faire un don
                    </Link>
                    <a
                      href="/contact"
                      className="kst-button-secondary"
                    >
                      <FaPhone />
                      Nous contacter
                    </a>
                  </div>
                )}
              </div>
              <div className="kst-image-container">
                {coverUrl && (
                  <img
                    src={coverUrl}
                    alt={
                      project?.Title ??
                      "Projet KST"
                    }
                    className="kst-image"
                  />
                )}
              </div>
            </div>
            {/* Barre uniquement pour le premier projet */}
            {index === 0 && goal > 0 && (
              <section className="kst-progress page-container">
                <div className="kst-progress-header">
                  <h2>
                    Objectif de collecte
                  </h2>
                  <span>
                    {current.toLocaleString()}€ /
                    {" "}
                    {goal.toLocaleString()}€
                  </span>
                </div>
                <div className="kst-progress-bar">
                  <div
                    className="kst-progress-fill"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
                <p className="kst-progress-text">
                  {percentage}% de l'objectif atteint
                </p>
              </section>
            )}
          </section>
          );
        })}
        <section className="kst-cta page-container">
          <h2>
            Ensemble, construisons un héritage
            durable.
          </h2>
         
        </section>
        <section className="kst-spaces">
  <div className="page-container">

    <div className="kst-spaces-header">
      
      <h2 className="kst-spaces-title">
        Les incontournables d'un kër serigne touba
      </h2>

      <p className="kst-spaces-description">
        Un lieu conçu pour apprendre,
        partager, se recueillir et
        renforcer les liens entre les
        générations.
      </p>
    </div>

    <div className="kst-spaces-grid">

      <div className="kst-space-card">
        <img src="https://res.cloudinary.com/dfmms7dyj/image/upload/v1782504613/jardin_ascat_43ca899735.png" alt="Jardin" />
        <h3>Jardin</h3>
      </div>

      <div className="kst-space-card">
        <img src="https://res.cloudinary.com/dfmms7dyj/image/upload/v1782504612/salledeclasse_ascat_d5a729b0ec.png" alt="Salle de classe" />
        <h3>Salles de classe</h3>
      </div>

      <div className="kst-space-card">
        <img src="https://res.cloudinary.com/dfmms7dyj/image/upload/v1782504613/bibliotheque_ascat_ffc9ec03f3.png" alt="Bibliothèque" />
        <h3>Bibliothèque</h3>
      </div>

      <div className="kst-space-card">
        <img src="https://res.cloudinary.com/dfmms7dyj/image/upload/v1782504613/salledepriere_ascat_159d93eeae.png" alt="Salle de prière" />
        <h3>Salle de prière</h3>
      </div>

    </div>

  </div>
</section>
          <p className="kst-button-description">
            Chaque contribution participe à la
            réalisation du projet Kër Serigne
            Touba au service des générations
            présentes et futures.
          </p>
           <Link
               href="/donation"
               className="kst-cta-button"
           >
               <span>Contribuer maintenant</span>
               <FaArrowRight className="kst-cta-icon" />
          </Link>
      </main>
    );
  }