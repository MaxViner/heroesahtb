import { useState } from "react";
import styles from "./Accordion.module.scss";
import AccordionItem from "./AccordionItem";

interface AccrodionProps {
  data: { title: string; description: string; imageUrl: string }[];
  className: string;
}

const Accordion: React.FC<AccrodionProps> = ({ data, className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={className}>
      <div className={styles.accordion}>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
