import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./ContactUs.module.css";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className={`container-fluid px-3 px-md-4 py-5 ${styles.contact}`}>
      <div className="container">
        <div className="row g-0 g-md-3">
          <div className="col-12 col-lg-10 mx-auto">
            {/* <h1 className={styles.pageTitle}>{t("contact.title")}</h1> */}

            {/* Contact Information Section */}
            <div className={styles.contactInfoSection}>
              <h2 className={styles.contactInfoTitle}>
                {t("contact.contactInfo")}
              </h2>

              {/* Two Cards Row - Mobile and Email */}
              <div className="row mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrapper}>
                      <FaPhone className={styles.contactIcon} />
                    </div>
                    <h4 className={styles.contactItemTitle}>
                      {t("footer.mobile")}
                    </h4>
                    <a
                      href={`tel:${t("contact.phone")}`}
                      className={styles.contactValue}
                    >
                      {t("contact.phone")}
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrapper}>
                      <FaEnvelope className={styles.contactIcon} />
                    </div>
                    <h4 className={styles.contactItemTitle}>
                      {t("footer.email")}
                    </h4>
                    <a
                      href={`mailto:${t("contact.emailAddress")}`}
                      className={styles.contactValue}
                    >
                      {t("contact.emailAddress")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Addresses Card - Full Width */}
              <div className="row">
                <div className="col-12">
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconWrapper}>
                      <FaMapMarkerAlt className={styles.contactIcon} />
                    </div>
                    <h4 className={styles.contactItemTitle}>
                      {t("contact.addresses")}
                    </h4>
                    <div className="row">
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className={styles.addressCard}>
                          <span className={styles.addressName}>
                            {t("contact.address1")}
                          </span>
                          <a
                            href={`tel:${t("contact.phone")}`}
                            className={styles.phoneLink}
                            title={t("contact.phone")}
                          >
                            <FaPhone className={styles.phoneIcon} />
                            <span className={styles.phoneNumber}>
                              {t("contact.phone")}
                            </span>
                          </a>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t("contact.address1Full"))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.locationLink}
                          >
                            <FaMapMarkerAlt className={styles.locationIcon} />
                            <span className={styles.locationText}>
                              {t("contact.address1Full")}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className={styles.addressCard}>
                          <span className={styles.addressName}>
                            {t("contact.address2")}
                          </span>
                          <a
                            href={`tel:${t("contact.phone")}`}
                            className={styles.phoneLink}
                            title={t("contact.phone")}
                          >
                            <FaPhone className={styles.phoneIcon} />
                            <span className={styles.phoneNumber}>
                              {t("contact.phone")}
                            </span>
                          </a>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t("contact.address2Full"))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.locationLink}
                          >
                            <FaMapMarkerAlt className={styles.locationIcon} />
                            <span className={styles.locationText}>
                              {t("contact.address2Full")}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className={styles.addressCard}>
                          <span className={styles.addressName}>
                            {t("contact.address3")}
                          </span>
                          <a
                            href={`tel:${t("contact.phone")}`}
                            className={styles.phoneLink}
                            title={t("contact.phone")}
                          >
                            <FaPhone className={styles.phoneIcon} />
                            <span className={styles.phoneNumber}>
                              {t("contact.phone")}
                            </span>
                          </a>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t("contact.address3Full"))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.locationLink}
                          >
                            <FaMapMarkerAlt className={styles.locationIcon} />
                            <span className={styles.locationText}>
                              {t("contact.address3Full")}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className={styles.addressCard}>
                          <span className={styles.addressName}>
                            {t("contact.address4")}
                          </span>
                          <a
                            href={`tel:${t("contact.phone")}`}
                            className={styles.phoneLink}
                            title={t("contact.phone")}
                          >
                            <FaPhone className={styles.phoneIcon} />
                            <span className={styles.phoneNumber}>
                              {t("contact.phone")}
                            </span>
                          </a>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t("contact.address4Full"))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.locationLink}
                          >
                            <FaMapMarkerAlt className={styles.locationIcon} />
                            <span className={styles.locationText}>
                              {t("contact.address4Full")}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.comingSoonItem}>
                      <span className={styles.comingSoonLabel}>
                        {t("contact.comingSoon")}
                      </span>
                      <span className={styles.addressNameSoon}>
                        {t("contact.address5")}
                      </span>
                      <span className={styles.separator}>-</span>
                      <span className={styles.addressNameSoon}>
                        {t("contact.address6")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
              <h2 className={styles.formTitle}>{t("contact.sendMessage")}</h2>
              <form className={styles.contactForm}>
                <div className="mb-3">
                  <label htmlFor="name" className={styles.formLabel}>
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.formInput}`}
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className={styles.formLabel}>
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    className={`form-control ${styles.formInput}`}
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className={styles.formLabel}>
                    {t("contact.message")}
                  </label>
                  <textarea
                    className={`form-control ${styles.formInput}`}
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  {t("contact.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
