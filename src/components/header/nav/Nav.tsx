import Link from "next/link";
import styles from "./Navigation.module.scss";

export const NavSmall: React.FC = ({}) => {
  return (
    <nav className={`${styles.nav__sm} `}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">Препятствия</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/training">Тренировки</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">События</Link>
        </li>
      </ul>
    </nav>
  );
};

export const NavLarge: React.FC = () => {
  return (
    <nav className={styles.nav__lm}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">Препятствия</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/training">Тренировки</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">События</Link>
        </li>
      </ul>
    </nav>
  );
};
