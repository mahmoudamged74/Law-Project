import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaXTwitter, FaLinkedin, FaTiktok } from "react-icons/fa6";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* Column 1: Logo, Name, Mission, Social Media */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className={styles.logoSection}>
              <img
                src="/assets/main-logo.webp"
                alt="Law Firm Logo"
                className={styles.logo}
              />
              <h3 className={styles.firmName}>{t("footer.firmName")}</h3>
              {/* <p className={styles.firmNameEn}>{t("footer.firmNameEn")}</p> */}
              <p className={styles.firmTagline}>{t("footer.firmTagline")}</p>
            </div>
            <p className={styles.mission}>{t("footer.mission")}</p>
            <div className={styles.socialIcons}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={styles.socialIcon}
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialIcon}
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className={styles.socialIcon}
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
            <h4 className={styles.sectionTitle}>{t("footer.quickLinks")}</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/about" className={styles.link}>
                  <span className={styles.checkIcon}>✓</span>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  <span className={styles.checkIcon}>✓</span>
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
            <h4 className={styles.sectionTitle}>
              {t("footer.contactChannels")}
            </h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>
                  <FaPhone className={styles.contactIcon} />
                  <a
                  href={`tel:${t("footer.phone")}`}
                  className={styles.contactValue}
                >
                  {t("footer.phone")}
                </a>
                </span>
                
              </li>

              <li>
                <span className={styles.contactLabel}>
                  <FaEnvelope className={styles.contactIcon} />
                  <a
                  href={`mailto:${t("footer.emailAddress")}`}
                  className={styles.contactValue}
                >
                  {t("footer.emailAddress")}
                </a>
                </span>
                
              </li>

              
              <li>
                <span className={styles.contactLabel}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <div className={styles.contactValue}>
                  <p>{t("footer.address1")}</p>
                </div>
                </span>
               
              </li>
            
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>{t("footer.rights")}</p>
          <a
            href="https://wa.me/966591361212"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappIcon}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          {showScrollTop && (
            <button
              className={styles.scrollTopBtn}
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
