import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Agreements.module.css";

export default function Agreements() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const images = [
    "/assets/a-image-2.jpg",
    "/assets/a-image-3.jpg",
    "/assets/a-image-5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [images.length, isModalOpen]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.agreementsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("agreements.title")}</h2>
        <div className="row">
          {/* Content Section */}
          <div className={`col-lg-7 ${styles.contentSection}`}>
            <div className={styles.contentWrapper}>
              <p className={styles.description}>
                {t("agreements.description1")}
              </p>
              <p className={styles.description}>
                {t("agreements.description2")}
              </p>
              <p className={styles.description}>
                {t("agreements.description3")}
              </p>
              <button className={styles.contactBtn}>
                <span>{t("agreements.contactUs")}</span>
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div className={`col-lg-5 ${styles.carouselSection}`}>
            <div className={styles.carouselContainer}>
              <div className={styles.carousel}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.carouselSlide} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Agreement ${index + 1}`}
                      className={styles.carouselImage}
                      onClick={() => openModal(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
              {/* Dots */}
              <div className={styles.dotsContainer}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal}>
              ×
            </button>
            <button
              className={styles.prevBtn}
              onClick={isRTL ? nextImage : prevImage}
            >
              ‹
            </button>
            <img
              src={images[modalImageIndex]}
              alt={`Agreement ${modalImageIndex + 1}`}
              className={styles.modalImage}
            />
            <button
              className={styles.nextBtn}
              onClick={isRTL ? prevImage : nextImage}
            >
              ›
            </button>
            <div className={styles.modalDots}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.modalDot} ${
                    index === modalImageIndex ? styles.active : ""
                  }`}
                  onClick={() => setModalImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
