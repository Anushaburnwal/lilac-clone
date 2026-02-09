import styles from "./SupportSection.module.css";

export default function SupportSection() {
  return (
    <section className={styles.section}>
      
      {/* LEFT IMAGE */}
      <div className={styles.imageWrapper}>
        <img src="/support.jpg" alt="Support" />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.content}>
        <div className="px-14">

          <h2>You don't have to do this all alone.</h2>

          <p className={styles.subtitle}>
            If you are facing any of these, there's hope:
          </p>

          <ul>
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className={styles.footerText}>
            With empathy and guidance, we’ll work together to navigate the
            challenges life throws your way.
          </p>

        </div>

        <button className={`${styles.cta} mt-auto`}>
          WORK WITH ME →
        </button>
      </div>

    </section>
  );
}