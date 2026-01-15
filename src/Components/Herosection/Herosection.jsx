import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaXTwitter, FaLinkedin, FaTiktok } from "react-icons/fa6";
import styles from "./Herosection.module.css";

function Herosection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const legalText = t("hero.legal");
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [legalText]);

  useEffect(() => {
    if (!isDeleting && currentIndex < legalText.length) {
      // Writing phase
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + legalText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 250);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === legalText.length) {
      // Wait before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setCurrentIndex(legalText.length - 1);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex >= 0) {
      // Deleting phase
      const timeout = setTimeout(() => {
        if (currentIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          // Clear completely before starting again
          setDisplayedText("");
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, legalText, isDeleting]);

  return (
    <section className={`hero-section ${styles.heroSection}`}>
      <div className={styles.overlay}></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          <div className={`col-lg-8 ${isRTL ? "text-end" : "text-start"}`}>
            <p className={styles.name}>{t("hero.name")}</p>
            <h1 className={styles.mainTitle}>
              <span className={styles.partnerText}>{t("hero.partner")} </span>
              <span className={styles.legalText}>
                {" "}
                {displayedText}
                <span className={styles.cursor}>|</span>
              </span>
            </h1>
            <button className={styles.contactBtn}>
              <span>{t("hero.contactUs")}</span>
              <span className={styles.arrow}>→</span>
            </button>
            <div className={styles.socialIcons}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <span className={styles.divider}>|</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <span className={styles.divider}>|</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
