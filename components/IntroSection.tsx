"use client";


import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={styles.section}>

      {/* LEFT TEXT */}
      <div className={styles.text}>

        <h2 className={`${styles.fadeUp} ${styles.delay1}`}>
          Hi, I’m Lilac.
        </h2>

        <p className={`${styles.fadeUp} ${styles.delay2}`}>
          I'm committed to providing a safe and supportive environment where
          we can explore your thoughts, feelings, and behaviors. With empathy
          and guidance, we'll work together to navigate the challenges life
          throws your way.
        </p>

        <div className={`w-full flex justify-center ${styles.fadeUp} ${styles.delay3}`}>
          <button className={styles.cta}>
            LET’S CHAT →
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
