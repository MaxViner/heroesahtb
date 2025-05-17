import Banner from "@/components/banner/Banner";
import styles from "./page.module.scss";
import Logo from "@/components/logo/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner imageUrl="/Images/banner.png" />
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
          <strong>Методики тренировок:</strong> Делимся советами по подготовке к
          гонкам, а также разбираем различные препятствия, способы прохождения и
          то как к ним подготовиться.
        </li>
        <li>
          <strong>Мотивация и вдохновение:</strong> Будем делиться историями
          успеха, мотивационными постами и идеями, которые помогут вам не
          сдаваться и двигаться вперед, даже когда трудно.
        </li>
      </ul>
      <p>
        Готовьтесь к гонкам, развивайтесь и, самое главное, наслаждайтесь
        процессом!
      </p>
      <div
        className={`${styles.description__bg} ${styles.description__bg__top}`}
      ></div>
      <div
        className={`${styles.description__bg} ${styles.description__bg__bot}`}
      ></div>
    </div>
  );
};
