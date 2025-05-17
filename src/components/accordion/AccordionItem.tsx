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
  const isOpen = activeIndex === index; // Determine if this item is open

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionHeader}
        onClick={() => toggleAccordion(index)}
      >
        <h2>{item.title}</h2>
      </div>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`} // Add 'open' class if item is active
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className={styles.accordionImage}
          loading="lazy"
        />
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
