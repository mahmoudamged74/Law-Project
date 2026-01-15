import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";
import styles from "./FrequentlyQuestions.module.css";

export default function FrequentlyQuestions() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const questions = t("frequentlyQuestions.questions", { returnObjects: true });

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      {/* Book Appointment Section */}
      <div className={styles.bookSection}>
        <div className="container">
          <div className={styles.bookContent}>
            <div className={styles.decorativeLines}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>
                {t("frequentlyQuestions.bookTitle")}
              </h3>
              <div className={styles.phoneContainer}>
                <div className={styles.phoneIcon}>
                  <FaPhone />
                </div>
                <a
                  href={`tel:${t("frequentlyQuestions.phone")}`}
                  className={styles.phoneLink}
                >
                  {t("frequentlyQuestions.phone")}
                </a>
              </div>
            </div>
            <div className={styles.decorativeLines}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.questionsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {t("frequentlyQuestions.title")}
          </h2>
          <div className={styles.questionsContainer}>
            {questions.map((item, index) => (
              <div key={item.id} className={styles.questionItem}>
                <button
                  className={`${styles.questionButton} ${
                    openIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleQuestion(index)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.icon}>
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`${styles.answerContainer} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  <div className={styles.answer}>{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
