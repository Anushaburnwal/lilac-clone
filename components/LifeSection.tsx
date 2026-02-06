import styles from "./LifeSection.module.css";

export default function LifeSection() {
  return (
    <section className={styles.section}>
      {/* LEFT TEXT */}
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Live a fulfilling life.</h2>
          <p>
            Life can be challenging—especially when you're trying to balance
            your personal and professional life.
          </p>

          <p>
            It's easy to feel like you're alone in facing these challenges, but
            I want you to know that I'm here to help.
          </p>
        <div className={styles.bottomBar}>
          <button className={styles.button}>GET IN TOUCH →</button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className={styles.imageWrapper}>
        <img src="/about.jpg" alt="Lifestyle" />
      </div>
    </section>
  );
}
