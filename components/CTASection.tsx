import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          Get started today.
        </h2>

        <p className={styles.text}>
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to
          starting this therapeutic journey with you.
        </p>

        <button className={styles.button}>
          GET IN TOUCH →
        </button>

      </div>
    </section>
  );
}
