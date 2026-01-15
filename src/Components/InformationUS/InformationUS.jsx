import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BsDiamondFill } from "react-icons/bs";
import styles from "./InformationUS.module.css";

export default function InformationUS() {
  const { t } = useTranslation();
  const [counters, setCounters] = useState({
    experience: 0,
    partnerships: 0,
    offices: 0,
  });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const stats = [
    {
      id: 1,
      number: t("informationUS.startYear"),
      text: t("informationUS.startYearText"),
      subtext: null,
      animate: false,
    },
    {
      id: 2,
      number: t("informationUS.experience"),
      text: t("informationUS.experienceText"),
      subtext: null,
      animate: true,
      key: "experience",
    },
    {
      id: 3,
      number: t("informationUS.partnerships"),
      text: t("informationUS.partnershipsText"),
      subtext: t("informationUS.partnershipsSubtext"),
      animate: true,
      key: "partnerships",
    },
    {
      id: 4,
      number: t("informationUS.offices"),
      text: t("informationUS.officesText"),
      subtext: t("informationUS.officesSubtext"),
      animate: true,
      key: "offices",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Animate experience counter
            const experienceTarget = parseInt(t("informationUS.experience"));
            const experienceDuration = 2000;
            const experienceSteps = 60;
            const experienceIncrement = experienceTarget / experienceSteps;
            let experienceCurrent = 0;
            const experienceInterval = setInterval(() => {
              experienceCurrent += experienceIncrement;
              if (experienceCurrent >= experienceTarget) {
                setCounters((prev) => ({
                  ...prev,
                  experience: experienceTarget,
                }));
                clearInterval(experienceInterval);
              } else {
                setCounters((prev) => ({
                  ...prev,
                  experience: Math.floor(experienceCurrent),
                }));
              }
            }, experienceDuration / experienceSteps);

            // Animate partnerships counter
            const partnershipsTarget = parseInt(
              t("informationUS.partnerships")
            );
            const partnershipsDuration = 2000;
            const partnershipsSteps = 60;
            const partnershipsIncrement =
              partnershipsTarget / partnershipsSteps;
            let partnershipsCurrent = 0;
            const partnershipsInterval = setInterval(() => {
              partnershipsCurrent += partnershipsIncrement;
              if (partnershipsCurrent >= partnershipsTarget) {
                setCounters((prev) => ({
                  ...prev,
                  partnerships: partnershipsTarget,
                }));
                clearInterval(partnershipsInterval);
              } else {
                setCounters((prev) => ({
                  ...prev,
                  partnerships: Math.floor(partnershipsCurrent),
                }));
              }
            }, partnershipsDuration / partnershipsSteps);

            // Animate offices counter
            const officesTarget = parseInt(t("informationUS.offices"));
            const officesDuration = 2000;
            const officesSteps = 60;
            const officesIncrement = officesTarget / officesSteps;
            let officesCurrent = 0;
            const officesInterval = setInterval(() => {
              officesCurrent += officesIncrement;
              if (officesCurrent >= officesTarget) {
                setCounters((prev) => ({ ...prev, offices: officesTarget }));
                clearInterval(officesInterval);
              } else {
                setCounters((prev) => ({
                  ...prev,
                  offices: Math.floor(officesCurrent),
                }));
              }
            }, officesDuration / officesSteps);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [t]);

  const getDisplayNumber = (stat) => {
    if (!stat.animate) {
      return stat.number;
    }
    return counters[stat.key] || 0;
  };

  return (
    <section ref={sectionRef} className={styles.informationSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("informationUS.title")}</h2>
        <div className={styles.cardsContainer}>
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={styles.statCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.numberContainer}>
                <span className={styles.number}>{getDisplayNumber(stat)}</span>
                {/* {stat.animate && (
                  <BsDiamondFill className={styles.diamondIcon} />
                )} */}
              </div>
              <p className={styles.statText}>{stat.text}</p>
              {/* {stat.subtext && (
                <p className={styles.statSubtext}>{stat.subtext}</p>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
