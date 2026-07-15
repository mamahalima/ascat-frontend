import "../../styles/navbar.css";
import "../../styles/hero.css";
import "../../styles/activites.css";
import "../../styles/actualities.css";
import "../../styles/upcoming.css";
import "../../styles/home.css";
import "../../styles/kst.css";
import "../../styles/gallery.css";
import "../../styles/support.css";
import "../../styles/footer.css";
import "../../styles/eventpage.css";
import "../../styles/about.css";
import "../../styles/project.css";
import "../../styles/activitypage.css";
import "../../styles/gallerypage.css";
import "../../styles/actualitypage.css";
import "../../styles/member.css";
import "../../styles/articlepage.css";
import "../../styles/contact.css";
import "../../styles/donationpage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar/>
        {children}
        < Footer/>
        </body>
    </html>
  );
}