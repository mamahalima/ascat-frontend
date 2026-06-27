import Hero from "../../components/Hero";
import Activities from "../../components/Activities";
import Actuality from "../../components/Actuality";
import UpcomingEvents from "../../components/UpcomingEvents";
import ProjectKst from "../../components/ProjectKst";
import Gallery from "../../components/Gallery";
import SupportActions from "../../components/SupportActions";


export default function Home() {
  return (
    <main>
      <Hero />
      <div className="page-container">
        <Activities />
      <section className="home-infos">
        <Actuality />
        <UpcomingEvents />
      </section>
        <ProjectKst />
        <Gallery />
      </div>
      <SupportActions />
    </main>
  );
}