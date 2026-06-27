import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaypal,
  FaUniversity, 
  FaCreditCard, FaMoneyCheckAlt
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

import { getFooter } from "../services/strapifooter";
import { FaX } from "react-icons/fa6";

export default async function Footer() {
  const footer = await getFooter();

  if (!footer) return null;
  
  return (
 <footer className="footer"id= "contact">
    <div className="footer-container">
        <div className="footer-column">
        <h3>A propos de ASCAT</h3>
         <div className="footer-info">
           <p>
            L'association de l'ASCAT oeuvre pour l'entre aide,l'education.
            </p>
          {footer.Logo?.length > 0 && (
            <img
              src={footer.Logo[0].url}
              alt={footer.Title}
              className="footer-logo"
            />
          )}
           <Link href="/about">
            A savoir plus <FaArrowRight/>
          </Link>
         </div>
        </div>
        <div className="footer-column">
        <h3>{footer.Title}</h3>
        <div className="footer-info">
          <p className="footer-contacte">
            <FaMapMarkerAlt className="footer-icon"/>
            {" "}
            {footer.Address}
          </p>
          <p className="footer-contacte">
            <FaPhone className="footer-icon"/>
            {" "}
            {footer.Phone}
          </p>
          <p className="footer-contacte" >
            <FaEnvelope className="footer-icon"/>
            {" "}
            {footer.Email}
          </p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/toubanice"
              target="_blank"
            >
              <FaFacebook className="face" />
            </a>
            <a
              href="https://www.instagram.com/toubanice"
              target="_blank"
            >
              <FaInstagram className="insta"/>
            </a>
            <a
              href="https://www.x.com/toubanice"
              target="_blank"
            >
              <FaXTwitter className="fax"/>
            </a>

            <a
              href="https://www.youtube.com/@toubanice"
              target="_blank"
            >
              <FaYoutube className="youtube"/>
            </a>
            <a
              href="https://www.paypal.me/Toubanice"
              target="_blank"
            >
              <FaPaypal className="paypal" />
            </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3>Navigation</h3>
          <div className="footer-info-nav">
          <Link href="/activity">
           activités
          </Link>
          <Link href="/events">
            Événements
          </Link>
          <Link href="/actuality">
            Actualités
          </Link>
          <Link href="/gallery">
            Galerie
          </Link>
          <Link href="/contact">
            Contact
          </Link>
          <Link href="/member">
            adhérer
          </Link>
         </div>
        </div>
      <div className="footer-column">
          <h3>Compte Bancaire</h3>
        <div className="footer-info">
            <p className="footer-contacte">
              <FaUniversity className="footer-icon" />
              <span>IBAN: FR76 3000 3015 0000 0372 6151 454</span>
            </p>
            <p className="footer-contacte">
              <FaCreditCard className="footer-icon" />
              <span>BIC: SOGEFRPP</span>
            </p>
            <p className="footer-contacte">
              <FaMoneyCheckAlt className="footer-icon" />
              <span>Chèque : à l’ordre d’ASCAT</span>
            </p>
          </div>
       </div>
   </div>
      <div className="footer-bottom">
      © 2026 {footer.Title} - Tous droits réservés ·
      <a href="#navbar">Retour en haut ↑</a>
      </div>
  </footer>
  );
}