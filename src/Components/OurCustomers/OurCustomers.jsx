import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./OurCustomers.module.css";

export default function OurCustomers() {
  const { t } = useTranslation();

  const clients = [
    {
      id: 1,
      image: "/assets/client-2.jpeg",
      alt: "Ministry of Defense",
    },
    {
      id: 2,
      image: "/assets/client-3.jpeg",
      alt: "South Hafar Al Batin Community Development Association",
    },
    {
      id: 3,
      image: "/assets/client-4.jpeg",
      alt: "ABC LOGISTIC",
    },
    {
      id: 4,
      image: "/assets/client-5.jpeg",
      alt: "Jawharat Hala Mall",
    },
  ];

  return (
    <section className={styles.customersSection}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h3 className={styles.subtitle}>{t("ourCustomers.title")}</h3>
          <h2 className={styles.title}>{t("ourCustomers.subtitle")}</h2>
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
          {clients.map((client) => (
            <SwiperSlide key={client.id} className={styles.swiperSlide}>
              <div className={styles.clientCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={client.image}
                    alt={client.alt}
                    className={styles.clientImage}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
