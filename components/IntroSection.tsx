"use client";


import styles from "./IntroSection.module.css";


export default function IntroSection() {
  return (
    <section className={styles.section}>

      {/* LEFT TEXT */}
      <div className={styles.text}>

        <h2 className={`${styles.fadeUp} ${styles.delay1}`}>
          Hi, I’m Maya Reynold's.
        </h2>

        <p className={`${styles.fadeUp} ${styles.delay2}`}>
          I’m a licensed clinical psychologist based in Santa Monica, helping adults navigate anxiety, trauma, and burnout in a supportive and grounded environment. Many of the people I work with appear capable on the outside while quietly feeling overwhelmed, tense, or emotionally exhausted.
          </p>
        <div className={`w-full flex justify-center ${styles.fadeUp} ${styles.delay3}`}>
          <button className={styles.cta}>
            TALK WITH DR. MAYA →
          </button>
        </div>

      </div>

      {/* RIGHT IMAGES */}
      <div className={styles.imageArea}>

        <div className={`${styles.mainImage} ${styles.fadeUp} ${styles.delay4}`}>
          <img src="/intro-main.jpg" alt="Lilac flowers" />
        </div>

        <div className={`${styles.circleImage} ${styles.fadeUp} ${styles.delay5}`}>
          <img src="/intro-circle.jpg" alt="Flowers close up" />
        </div>

      </div>

    </section>
  );
}
