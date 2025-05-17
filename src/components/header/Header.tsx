"use client";

import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import { NavLarge, NavSmall } from "./nav/Nav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMenuOpen(false);
    console.log(pathname);
  }, [pathname]);
  const onLogoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <button
        className={`${styles.Logo__sm} ${
          isMenuOpen ? styles.Logo__sm__open : styles.Logo__sm__closed
        }`}
        onClick={onLogoClick}
      >
        <Logo />
      </button>
      <header
        className={`${styles.header} ${
          isMenuOpen ? styles.visible : styles.hidden
        }`}
      >
        <Logo classname={styles.Logo__lm} />
        <NavLarge />
        <NavSmall />
      </header>
    </>
  );
};

export default Header;
