"use client";


import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={`${styles.title} ${styles.fadeUp} ${styles.delay1}`}>
          Get started today.
        </h2>

        <p className={`${styles.text} ${styles.fadeUp} ${styles.delay2}`}>
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to
          starting this therapeutic journey with you.
        </p>

        <button className={`${styles.button} ${styles.fadeUp} ${styles.delay3}`}>
          GET IN TOUCH →
        </button>

      </div>
    </section>
  );
}
