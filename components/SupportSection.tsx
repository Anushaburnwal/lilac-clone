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
            You don't have to do this all alone.
          </h2>

          <p className={`${styles.subtitle} ${styles.fadeUp} ${styles.delay3}`}>
            If you are facing any of these, there's hope:
          </p>

          <ul className={`list-disc pl-6 space-y-2 ${styles.fadeUp} ${styles.delay4}`}>
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className={`${styles.footerText} ${styles.fadeUp} ${styles.delay5}`}>
            With empathy and guidance, we’ll work together to navigate the
            challenges life throws your way.
          </p>

        </div>

        <button className={`${styles.cta} ${styles.fadeUp} ${styles.delay6}`}>
          WORK WITH ME →
        </button>

      </div>

    </section>
  );
}
