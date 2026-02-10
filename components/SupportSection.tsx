"use client";


import styles from "./SupportSection.module.css";

export default function SupportSection() {
  return (
    <section className={styles.section}>

      {/* LEFT IMAGE */}
      <div className={`${styles.imageWrapper} ${styles.fadeUp} ${styles.delay1}`}>
        <img src="/support.jpg" alt="Support" />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.content}>
        <div className="px-14">

          <h2 className={`${styles.fadeUp} ${styles.delay2}`}>
            You Deserve Support Through This
          </h2>

          <p className={`${styles.subtitle} ${styles.fadeUp} ${styles.delay3}`}>
            You may benefit from therapy if you’re experiencing:
          </p>

          <ul className={`list-disc pl-6 space-y-2 ${styles.fadeUp} ${styles.delay4}`}>
            <li>Constant worry or overthinking that feels hard to quiet</li>
            <li>Physical tension, restlessness, or difficulty relaxing</li>
            <li>Emotional exhaustion or professional burnout</li>
            <li>Lingering stress from past experiences</li>
            <li>Feeling functional on the outside but overwhelmed inside</li>
          </ul>

          <p className={`${styles.footerText} ${styles.fadeUp} ${styles.delay5}`}>
            With empathy, structure, and thoughtful guidance, we work together to create safety, clarity, and lasting emotional balance — at a pace that feels supportive and sustainable.
          </p>

        </div>

        <button className={`${styles.cta} ${styles.fadeUp} ${styles.delay6}`}>
          GET SUPPORT →
        </button>

      </div>

    </section>
  );
}
