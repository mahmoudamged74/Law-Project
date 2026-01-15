import { useTranslation } from "react-i18next";
import {
  FaHandHoldingHeart,
  FaUserFriends,
  FaBuilding,
  FaGavel,
} from "react-icons/fa";
import styles from "./OurService.module.css";

export default function OurService() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      text: t("services.civil"),
      icon: FaHandHoldingHeart,
    },
    {
      id: 2,
      text: t("services.personal"),
      icon: FaUserFriends,
    },
    {
      id: 3,
      text: t("services.commercial"),
      icon: FaBuilding,
    },
    {
      id: 4,
      text: t("services.criminal"),
      icon: FaGavel,
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("services.title")}</h2>
        <div className={styles.cardsContainer}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={styles.serviceCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.iconContainer}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <div className={styles.textContainer}>
                    <p className={styles.serviceText}>{service.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
