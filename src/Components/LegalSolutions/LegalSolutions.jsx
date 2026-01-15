import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import {
  FaGavel,
  FaUsers,
  FaHome,
  FaLightbulb,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./LegalSolutions.module.css";

export default function LegalSolutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      id: 1,
      title: t("legalSolutions.criminal"),
      icon: FaGavel,
    },
    {
      id: 2,
      title: t("legalSolutions.family"),
      icon: FaUsers,
    },
    {
      id: 3,
      title: t("legalSolutions.realEstate"),
      icon: FaHome,
    },
    {
      id: 4,
      title: t("legalSolutions.intellectual"),
      icon: FaLightbulb,
    },
    {
      id: 5,
      title: t("legalSolutions.commercial"),
      icon: FaBriefcase,
    },
    {
      id: 6,
      title: t("legalSolutions.educational"),
      icon: FaGraduationCap,
    },
  ];

  return (
    <section className={styles.legalSolutionsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("legalSolutions.title")}</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className={styles.swiper}
        >
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <SwiperSlide key={solution.id} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <div className={styles.iconContainer}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{solution.title}</h3>
                  <p className={styles.cardDescription}>
                    {t("legalSolutions.description")}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
