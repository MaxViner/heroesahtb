import Head from "next/head";
import styles from "./page.module.scss";
import Logo from "@/components/logo/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/Images/banner.png"
          alt="banner"
          width={1200}
          height={600}
          className={styles.banner}
        ></Image>
        <Logo classname={styles.MainLogo} />
        <WelcomeMessage />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

const WelcomeMessage: React.FC = () => {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>
        Добро пожаловать на сайт, посвященный гонкам с препятствиями!
      </h1>
      <p>
        Здесь мы собираемся вместе, чтобы делиться знаниями и опытом о том, как
        преодолевать сложные трассы и становиться сильнее. Это пространство для
        каждого, кто хочет испытать себя, улучшить физическую форму и найти
        единомышленников!
      </p>
      <h2 className={styles.subtitle}>Здесь вы найдете:</h2>
      <ul className={styles.bulletList}>
        <li>
          <strong>Информация о гонках с препятствиями:</strong> Узнавайте о
          предстоящих соревнованиях, событиях и новостях в мире OCR (Obstacle
          Course Racing).
        </li>
        <li>
          <strong>Методики тренировок:</strong> Делитесь своими секретами и
          наработками по подготовке к гонкам, а также получайте советы от
          экспертов и опытных участников.
        </li>
        <li>
          <strong>Мотивация и вдохновение:</strong> Будем делиться историями
          успеха, мотивационными постами и идеями, которые помогут вам не
          сдаваться и двигаться вперед, даже когда трудно.
        </li>
      </ul>
      <p>
        Станьте победителем вместе с нами! Готовьтесь к гонкам, развивайте
        нужные навыки и, самое главное, наслаждайтесь процессом!
      </p>
    </div>
  );
};
