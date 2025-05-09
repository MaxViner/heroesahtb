import React from "react";
import Image from "next/image";
import styles from "./Logo.module.scss";

interface LogoProps {
  classname?: string; // Опциональное свойство width
}

// Основной экспорт компонента
const Logo: React.FC<LogoProps> = ({ classname }) => {
  return (
    <Image
      src="/Images/gs.png"
      alt="Logo"
      width={100}
      height={100} // Убедитесь, что высота соответствует ширине, если логотип квадратный
      className={`${styles.logo} ${classname}`} // Применение стилей и дополнительных классов, если они переданы
    />
  );
};

export default Logo;
