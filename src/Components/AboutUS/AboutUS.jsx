import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import styles from "./AboutUS.module.css";

export default function AboutUS() {
  const { t } = useTranslation();

  const features = [
    { id: 1, text: t("about.feature1") },
    { id: 2, text: t("about.feature2") },
    { id: 3, text: t("about.feature3") },
  ];

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* Content Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className={styles.contentWrapper}>
              <h3 className={styles.sectionTitle}>{t("about.aboutOffice")}</h3>
              <h2 className={styles.firmName}>{t("about.firmName")}</h2>
              <p className={styles.description}>{t("about.description1")}</p>

              <div className={styles.featuresList}>
                {features.map((feature) => (
                  <div key={feature.id} className={styles.featureItem}>
                    <div className={styles.checkIcon}>
                      <FaCheck />
                    </div>
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className={styles.contactBtn}>
                <span>{t("about.contactUs")}</span>
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <img
                src="/assets/a-image-2.jpg"
                alt="Law Firm Office"
                className={styles.aboutImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
