import { getSupport } from "../services/strapisupport";
import Link from "next/link";

export default async function SupportActions() {
  const support = await getSupport();
  console.log("SUPPORT :", support);

  if (!support) return null;

  return (
    <section className="support-actions">
      <div className="support-image-container">
        {support.Cover?.length > 0 && (
          <img
            src={support.Cover[0].url}
            alt={support.Title}
            className="support-image"
          />
        )}
      </div>

      <div className="support-content">
      <h2 className="support-title">
          {support.Title}
        </h2>
        <p className="support-description">
          {support.Description?.[0]?.children?.[0]?.text}
        </p>
      </div>
      <div className="support-buttons">
       <a
    href="/donation"
    className="support-button-primary"
       >
    Faire un don
      </a>
     <Link
    href="/member"
    className="support-button-secondary"
     >
    Adhérer à l'association
     </Link>
</div>
    </section>
  );
}