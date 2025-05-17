import React from "react";
import { BsBrowserChrome } from "react-icons/bs";
import { ImVk } from "react-icons/im";
import styles from "./Footer.module.scss"; // Optional: Import your styles
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a
          href="https://vk.com/steppesheroes?from=groups"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Мы в ВК
          <ImVk size={24} />
        </a>
        <a
          href="https://heroleague.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Лига героев
          <BsBrowserChrome size={24} />
        </a>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Max Viner. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
