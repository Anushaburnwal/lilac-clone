"use client";

import { DM_Sans } from "next/font/google";
import styles from "./Hero.module.css";
import { useReveal } from "@/hooks/useReveal";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className={`font-dmSans h-fit flex mx-7 pt-32 fade-up ${visible ? "show" : ""}`}
    >
      {/* Image */}
      <div
        className={`w-1/3 rounded-t-full overflow-hidden 
        ${styles.fadeUp} ${styles.delay1}`}
      >
        <img src="/hero.jpg" alt="Hero" />
      </div>

      {/* Text */}
      <div className="w-2/3 flex flex-col items-center justify-center">
        <div className="w-7/12 flex flex-col items-center">
          <h1
            className={`${styles.heroTitle} ${dmSans.className} 
            ${styles.fadeUp} ${styles.delay2}`}
          >
            Anxiety & Trauma Therapy for Adults in Santa Monica
          </h1>

          <p
            className={`${styles.heroText} 
            ${styles.fadeUp} ${styles.delay3}`}
          >
            Supporting high-achieving adults who feel overwhelmed, stuck in overthinking, or emotionally exhausted.
          </p>

          <button
            className={`${styles.heroButton} 
            ${styles.fadeUp} ${styles.delay4}`}
          >
            SCHEDULE A CONSULTATION →
          </button>
        </div>
      </div>
    </section>
  );
}
