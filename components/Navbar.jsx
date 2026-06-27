"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar"className="navbar">
      <div className="logo">
        <Link href="/" className="logo-container">
          <img
            src="https://res.cloudinary.com/dfmms7dyj/image/upload/v1780585069/Image_21_mai_a3523076ad.png"
            alt="ASCAAT Logo"
            className="logo-image"
          />

          <div className="logo-text">
            <h1>ASCAT</h1>
            <p>Association sociale et culturelle des amis de Touba</p>
          </div>
        </Link>
      </div>

      <button className="menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
              {isOpen ? "✕" : "☰"}
     </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
        </li>

        <li>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            À propos
          </Link>
        </li>
        <li>
          <Link href="/activity" onClick={() => setIsOpen(false)}>
            Activités
          </Link>
        </li>
        <li>
          <Link href="/events" onClick={() => setIsOpen(false)}>
            Évènements
          </Link>
        </li>
        <li>
          <Link href="/actuality" onClick={() => setIsOpen(false)}>
            Actualités
          </Link>
        </li>
        <li>
         <Link href="/projectkst" onClick={() => setIsOpen(false)}>
            Projet KST
        </Link>
        </li> 
        <Link href="/member" className="btn-join-mobile" onClick={() => setIsOpen(false)}>
            Adhérer
        </Link>
     </ul>
       <Link href="/member" className="btn-join">
            Adhérer
       </Link>
    </nav>
  );
}