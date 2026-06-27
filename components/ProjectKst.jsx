import Link from "next/link";
import {
  FaCheckCircle,
  FaChartLine,
  FaHandshake,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

import { getProjectKST } from "../services/strapiproject";

export default async function ProjectKST() {
  const projects = await getProjectKST();
  const project = projects?.[0];

  if (!project) return null;

  return (
    <section className="project-kst">
      <div className="project-kst-image-container">
        {project.Cover?.length > 0 && (
          <img
            src={project.Cover[0].url}
            alt={project.Title}
            className="project-kst-image"
          />
        )}
      </div>

      <div className="project-kst-content">
        <span className="project-kst-label">
          {project.Subtitle}
        </span>

        <h2 className="project-kst-title">
          {project.Title}
        </h2>

        <p className="project-kst-description">
          {project.Description?.[0]?.children?.[0]?.text}
        </p>

        <div className="project-features-container">
          <div className="project-kst-feature">
            <FaCheckCircle className="project-icon"/>
            <span>Vision claire</span>
          </div>

          <div className="project-kst-feature">
            <FaChartLine className="project-icon"/>
            <span>Avancement régulier</span>
          </div>

          <div className="project-kst-feature">
            <FaHandshake className="project-icon"/>
            <span>Transparence</span>
          </div>

          <div className="project-kst-feature">
            <FaHandsHelping className="project-icon"/>
            <span>Appel aux dons</span>
          </div>
        </div>

        <Link href="/projectkst" className="project-kst-button">
          Découvrir le projet <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}