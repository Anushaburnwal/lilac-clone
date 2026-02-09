import { DM_Sans } from "next/font/google";
import styles from "./Hero.module.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className={`h-fit flex justify- mx-7`}>

      {/* Image */}
      <div className={`w-1/3  rounded-t-full overflow-hidden`}>
        <img src="/hero.jpg" alt="Hero" />
      </div>

      {/* Text  */}
      <div className={`w-2/3 flex flex-col items-center justify-center`} >

        <div className="w-7/12 flex flex-col items-center">

          <h1 className={`${styles.heroTitle} ${dmSans.className}`}>
            Live your life in full bloom
          </h1>

          <p className={styles.heroText}>
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className={styles.heroButton}>
            CONNECT WITH ME →
          </button>
        </div>

      </div>

    </section>
  );
}