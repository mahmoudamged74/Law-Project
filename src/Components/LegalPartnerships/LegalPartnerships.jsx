import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./LegalPartnerships.module.css";

export default function LegalPartnerships() {
  const { t } = useTranslation();

  const partnerships = [
    {
      id: 1,
      name: t("legalPartnerships.partnership1"),
      link: "https://example.com/partnership1",
      image: "/assets/client-2.jpeg", 
    },
    {
      id: 2,
      name: t("legalPartnerships.partnership2"),
      link: "https://example.com/partnership2",
      image: "/assets/client-3.jpeg",
    },
    {
      id: 3,
      name: t("legalPartnerships.partnership3"),
      link: "https://example.com/partnership3",
      image: "/assets/client-4.jpeg",
    },
    {
      id: 4,
      name: t("legalPartnerships.partnership4"),
      link: "https://example.com/partnership4",
      image: "/assets/client-5.jpeg",
    },
  ];

  return (
    <section className={styles.partnershipsSection}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h3 className={styles.subtitle}>{t("legalPartnerships.title")}</h3>
          <p className={styles.aboutTitle}>{t("legalPartnerships.subtitle")}</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
        >
          {partnerships.map((partnership) => (
            <SwiperSlide key={partnership.id} className={styles.swiperSlide}>
              <a
                href={partnership.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnershipCard}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={partnership.image}
                    alt={partnership.name}
                    className={styles.partnershipImage}
                  />
                </div>
                <div className={styles.partnershipName}>{partnership.name}</div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
