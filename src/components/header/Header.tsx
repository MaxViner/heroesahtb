import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.navList}>
          {" "}
          {/* Added className for styling */}
          <li className={styles.navItem}>
            {" "}
            {/* Added className for each list item */}
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
    </header>
  );
};

export default Header;
