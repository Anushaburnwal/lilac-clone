"use client";


import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={`${styles.title} ${styles.fadeUp} ${styles.delay1}`}>
          Begin Your Healing Journey
        </h2>

        <p className={`${styles.text} ${styles.fadeUp} ${styles.delay2}`}>
          Therapy can be a space to slow down, reconnect with yourself, and 
          move forward with greater clarity and balance. Whether you’re feeling 
          overwhelmed, burned out, or ready for change, support is available in 
          a way that feels safe and grounded.
        </p>

        <button className={`${styles.button} ${styles.fadeUp} ${styles.delay3}`}>
          BOOK A CONSULTATION →
        </button>

      </div>
    </section>
  );
}
