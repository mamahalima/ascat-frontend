import Link from "next/link";
import { getActualityBySlug } from "../../../../services/strapiactu";
import { FiArrowLeft, FiClock, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

function renderBlocks(blocks) {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) =>
      block?.children
        ?.map((child) => child.text || "")
        .join("")
    )
    .join(" ");
  }
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  console.log("URL SLUG:", slug);
  const article = await getActualityBySlug(slug);
  console.log("ARTICLE:", article);

  if (!article) {
    return (
      <main className="page-container">
        <h1>Article introuvable</h1>
      </main>
    );
  }
  console.log("COVER:", article.cover);
  console.log("DESCRIPTION:", article.Description);
  return (
    <main className="article-page">
      <div className="arcticle-container">
        <Link href="/actuality" className="article-back">
          <FiArrowLeft />
          <span>Retour aux actualités</span>
        </Link>
        {article.Subtitle && (
          <span className="article-subtitle">
            {article.Subtitle}
          </span>
        )}
        <h1 className="article-title">
          {article.Title}
        </h1>
        <div className="article-meta">
          <div className="articlemap">
          {article.Date && (
            <div className="meta-item">
              <FiClock className="icon-date"
              />
              <span>{article.Date}</span>
            </div>
          )}
          {article.Localisation && (
            <div className="meta-item">
              <FiMapPin  className="icon-map"
              />
              <span>{article.Localisation}</span>
            </div>
          )}
          </div>
        <div className="article-social">
         <h3>Suivez l'ASCAT</h3>

         <div className="social-links">
           <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
           >
             <FaFacebookF />
           </a>

           <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            >
             <FaInstagram />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
          >
            <FaYoutube />
          </a>

          <a
           href="https://X.com"
           target="_blank"
           rel="noopener noreferrer"
           className="social-icon twitter"
          >
           <FaXTwitter/>
         </a>
         </div>
        </div>
       </div>
        {article.cover?.[0]?.url && (
          <img
            src={article.cover[0].url}
            alt={article.Title || "article image"}
            className="article-image"
          />
        )}
        <div className="article-content">
          {renderBlocks(article?.Description)}
        </div>
      </div>
    </main>
  );
}