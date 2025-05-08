import React from "react";
import styles from "./AccordionItem.module.scss";

interface AccordionItemProps {
  item: {
    title: string;
    description: string;
    imageUrl: string;
  };
  index: number;
  activeIndex: number | null;
  toggleAccordion: (index: number) => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  activeIndex,
  toggleAccordion,
}) => {
  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionHeader}
        onClick={() => toggleAccordion(index)}
      >
        <h2>{item.title}</h2>
      </div>
      {activeIndex === index && (
        <div className={styles.accordionContent}>
          <img
            src={item.imageUrl}
            alt={item.title}
            className={styles.accordionImage}
          />
          <p>{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
