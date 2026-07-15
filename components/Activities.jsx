import Link from "next/link";
import {
    FaHandsHelping,
    FaBookOpen,
    FaMosque,
    FaGlobeAfrica,
    FaGraduationCap,
    FaHandHoldingHeart,
    FaArrowRight ,
  } from "react-icons/fa";
  
  export default function Activities() {
    const activities = [
      {
        icon: <FaHandsHelping />,
        title: "Entraide & Solidarité",
        href: "/activity#entraide-solidarite",
      },
      {
        icon: <FaBookOpen />,
        title: "Soutien scolaire",
        href: "/activity#soutien-scolaire",
      },
      {
        icon: <FaMosque />,
        title: "Valorisation du patrimoine culturel",
        href: "/activity#patrimoine-culturel",
      },
      {
        icon: <FaGlobeAfrica />,
        title: "Échanges interculturels",
        href: "/activity#echanges-interculturels",

      },
      {
        icon: <FaGraduationCap />,
        title: "Orientation éducative & pro",
        href: "/activity#orientation-educative",
      },
    ];
  
    return (
      <section className="activities">
         <h2>Nos activités</h2>
         {activities.map((activity) => (
         <Link
              href={activity.href}
              key={activity.title}
              className="activity-card"
             >
          <div className="activity-icon">{activity.icon}
          </div>
          <h3>{activity.title}</h3>
         </Link> ))}
      </section>
    );
  }