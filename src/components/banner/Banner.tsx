import Image from "next/image";
import styles from "./Banner.module.scss";

interface BannerProps {
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt="banner"
      width={1200}
      height={600}
      className={styles.banner}
    ></Image>
  );
};

export default Banner;
