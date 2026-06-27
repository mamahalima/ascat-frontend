import {
    FaHandsHelping,
    FaBookOpen,
    FaMosque,
    FaGlobeAfrica,
    FaGraduationCap,
    FaHandHoldingHeart,
  } from "react-icons/fa";
  
  export default function Activities() {
    const activities = [
      {
        icon: <FaHandsHelping />,
        title: "Entraide & Solidarité",
      },
      {
        icon: <FaBookOpen />,
        title: "Soutien scolaire",
      },
      {
        icon: <FaMosque />,
        title: "Valorisation du patrimoine culturel",
      },
      {
        icon: <FaGlobeAfrica />,
        title: "Échanges interculturels",
      },
      {
        icon: <FaGraduationCap />,
        title: "Orientation éducative & pro",
      },
      {
        icon: <FaHandHoldingHeart />,
        title: "Humanitaire & solidarité",
      },
    ];
  
    return (
      <section className="activities">
         <h2>Nos activités</h2>
        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <div className="activity-icon">
              {activity.icon}
            </div>
            <h3>{activity.title}</h3>
          </div>
        ))}
      </section>
    );
  }