import Herosection from "../../Components/Herosection/Herosection";
import OurService from "../../Components/OurService/OurService";
import Agreements from "../../Components/Agreements/Agreements";
import LegalSolutions from "../../Components/LegalSolutions/LegalSolutions";
import InformationUS from "../../Components/InformationUS/InformationUS";
import OurCustomers from "../../Components/OurCustomers/OurCustomers";
import FrequentlyQuestions from "../../Components/FrequentlyQuestions/FrequentlyQuestions";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Herosection />
      <OurService />
      <Agreements />
      <LegalSolutions />
      <InformationUS />
      <OurCustomers />
      <FrequentlyQuestions />
    </div>
  );
}

export default Home;
