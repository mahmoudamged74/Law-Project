import AboutUS from "../../Components/AboutUS/AboutUS";
import LegalPartnerships from "../../Components/LegalPartnerships/LegalPartnerships";
import InformationUS from "../../Components/InformationUS/InformationUS";
import styles from "./About.module.css";
import Team from "../../Components/Team/Team";

function About() {
  return (
    <div className={styles.about}>
      <AboutUS />
      <LegalPartnerships />
      <Team />
      <InformationUS />

    </div>
  );
}

export default About;
