import { DM_Sans } from "next/font/google";
import styles from "./Hero.module.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className={styles.heroSection}>

      {/* Image */}
      <div className={styles.heroImageWrapper}>
        <img src="/hero.jpg" alt="Hero" />
      </div>

      {/* Text */}
      <div className={styles.heroTextWrapper}>

        <h1 className={`${styles.heroTitle} ${dmSans.className}`}>
          Live your life <br /> in full bloom
        </h1>

        <p className={styles.heroText}>
          Therapy for Adults in Minneapolis, MN.
        </p>

        <button className={styles.heroButton}>
          CONNECT WITH ME →
        </button>

      </div>

    </section>
  );
}
