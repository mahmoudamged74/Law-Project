import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Team.module.css";

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t("team.member1Name"),
      position: t("team.member1Position"),
      image: "/assets/user.jpg", 
    },
    {
      id: 2,
      name: t("team.member2Name"),
      position: t("team.member2Position"),
      image: "/assets/user.jpg",
    },
    {
      id: 3,
      name: t("team.member3Name"),
      position: t("team.member3Position"),
      image: "/assets/user.jpg",
    },
    {
      id: 4,
      name: t("team.member4Name"),
      position: t("team.member4Position"),
      image: "/assets/user.jpg",
    },
    {
      id: 4,
      name: t("team.member4Name"),
      position: t("team.member4Position"),
      image: "/assets/user.jpg",
    },
    {
      id: 4,
      name: t("team.member4Name"),
      position: t("team.member4Position"),
      image: "/assets/user.jpg",
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h3 className={styles.subtitle}>{t("team.title")}</h3>
          <h2 className={styles.title}>{t("team.subtitle")}</h2>
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
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className={styles.swiperSlide}>
              <div className={styles.teamCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.teamImage}
                  />
                </div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberPosition}>{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
