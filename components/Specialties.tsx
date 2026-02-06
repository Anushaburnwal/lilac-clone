import styles from "./Specialties.module.css";

export default function Specialties() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>My Specialties</h2>

      <div className={styles.grid}>
        {/* CARD 1 */}
        <div className={styles.card}>
          <h3>Self-Esteem</h3>
          <p>
            Building a strong sense of self-worth is key to living a fulfilled
            life. Let’s work together to bolster your self-esteem.
          </p>

          <div className={styles.imageWrap}>
            <img src="/special1.jpg" alt="Self esteem" />
          </div>
        </div>

        {/* CARD 2 */}
        <div className={styles.card}>
          <h3>Relationships</h3>
          <p>
            Navigating relationships can be complex. I’m here to guide you
            through these complexities to help you form healthier connections.
          </p>

          <div className={styles.imageWrap}>
            <img src="/special2.jpg" alt="Relationships" />
          </div>
        </div>

        {/* CARD 3 */}
        <div className={styles.card}>
          <h3>Burnout</h3>
          <p>
            Feeling overwhelmed by your career is more common than you think.
            Together, we’ll identify strategies to manage and prevent burnout.
          </p>

          <div className={styles.imageWrap}>
            <img src="/special3.jpg" alt="Burnout" />
          </div>
        </div>
      </div>
    </section>
  );
}
