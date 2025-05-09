import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/Images/logo.png"
        alt="Logo"
        width={100}
        height={100} // Убедитесь, что высота соответствует ширине, если логотип квадратный
        className={`${styles.logo}`} // Применение стилей и дополнительных классов, если они переданы
      />
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
