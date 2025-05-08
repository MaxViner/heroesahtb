import styles from "./page.module.css";
import Logo from "@/components/logo/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Logo classname={styles.MainLogo} />
        <h3>Из равнин к неведомым высотам</h3>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
