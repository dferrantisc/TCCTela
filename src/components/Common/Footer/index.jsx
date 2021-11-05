import Link from "next/link";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          All Copyrights reserved&copy; 2021 WEBSISCAVI - Designed & Developed
          by ADSoftware in Partnership with
          <a rel="nofollow" href="https://www.unigran.br/dourados/">
            UNIGRAN
          </a>
        </p>
      </div>
    </footer>
  );
}
