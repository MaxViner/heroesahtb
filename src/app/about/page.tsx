"use client";
import Accordion from "@/components/accordion/Accordion";
import styles from "./About.module.scss";

import { AboutPageAccordionData } from "./AboutPageAccordionData";
const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Препятствия гонки героев Волгоград 2024</h1>

      <Accordion data={AboutPageAccordionData} className={styles.Accordion} />
    </div>
  );
};

export default About;
