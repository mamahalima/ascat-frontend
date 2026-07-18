"use client";

import { SiPaypal } from "react-icons/si";
import { FaUniversity,FaWallet } from "react-icons/fa";

const moyensPaiement = [
  {
    nom: "Wero",
    icon: <FaWallet />,
    color: "#ff7900",
    type: "numero",
    valeur: "+33 07 49 58 50 91",
    titulaire: "Serigne Fallou Thiam",
  },
  {
    nom: "SumUp",
    icon: <FaWallet />,
    color: "#0A2540",
    type: "lien",
    url: "https://pay.sumup.com/b2c/QHKFO9XO"
  },
  
  {
    nom: "PayPal",
    icon: <SiPaypal />,
    color: "#003087",
    type: "lien",
    url: "https://www.paypal.me/Toubanice", 
  },
  {
    nom: "Virement bancaire",
    icon: <FaUniversity />,
    color: "#1E40AF",
    type: "banque",
    banque: "Societe generale",
    titulaire: "LADAL MANAAZILI",
    iban: " FR76 3000 3015 0000 0372 6151 454",
    bic: "SOGEFRPP",
  },
  {
    nom: "Cagnotte en ligne",
    icon: <FaWallet />,
    color: "#22C55E",
    type: "lien",
    url: "https://www.helloasso.com/associations/ascat/formulaires/1",
  },
];

export default function DonationPage() {
  const copier = (texte) => {
    navigator.clipboard.writeText(texte);
    alert("Copié dans le presse-papiers !");
  };

  return (
    <main>
        <div className="hero-donation">
      <h1>Faire un don</h1>
      <p className="subtitle">
        Soutenez les actions de LADAL MANAAZILI en utilisant l'un des moyens de
        contribution ci-dessous.
      </p>
      </div>
      <section className="donationSection">
      <div className="cards">
        {moyensPaiement.map((item) => (
          <div className="card" key={item.nom}>
            <div
              className="icon"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
            <h3>{item.nom}</h3>
            {item.type === "numero" && (
              <>
                <p>{item.valeur}</p>
                {item.titulaire && (
                <p>
                <strong>Titulaire :</strong> {item.titulaire}
                </p>
                )}
                <button onClick={() => copier(item.valeur)}
                         style={{ background: item.color }}>
                  Copier le numéro
                </button>
              </>
            )}

            {item.type === "lien" && (
              <>
               <p>Contribution sécurisée via {item.nom}.</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="payButton"
                  style={{ background: item.color }}
                >
                  Faire un don avec {item.nom}
                </a>
              </>
            )}

            {item.type === "banque" && (
              <>
                <p>
                  <strong>Banque :</strong> {item.banque}
                </p>

                <p>
                  <strong>Titulaire :</strong> {item.titulaire}
                </p>

                <p>
                  <strong>IBAN :</strong> {item.iban}
                </p>

                <p>
                  <strong>BIC :</strong> {item.bic}
                </p>

                <button onClick={() => copier(item.iban)}
                        style={{ background: item.color }}>
                  Copier l'IBAN
                </button>
              </>
            )} 
          </div>
        ))}
      </div>
      </section>
    </main>
  );
}