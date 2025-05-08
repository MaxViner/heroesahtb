import React from "react";
import Image from "next/image";
// import styles from "./Logo.module.scss";

// interface LogoProps {
//   classname?: string; // Опциональное свойство width
// }

// Основной экспорт компонента
const Logo: React.FC = ({}) => {
  // Установка значения по умолчанию
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={100}
      height={100}
      //   className={`${styles.logo} ${classname}`}
    />
  );
};

export default Logo;
