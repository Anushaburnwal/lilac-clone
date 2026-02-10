"use client";


import styles from "./Specialties.module.css";

export default function Specialties() {
  return (
    <section className={styles.section}>

      {/* Heading */}
      <h2 className={`${styles.heading} ${styles.fadeUp} ${styles.delay1}`}>
        Therapy Services
      </h2>

      <div className={styles.grid}>

        {/* CARD 1 */}
        <div className={`${styles.card} ${styles.fadeUp} ${styles.delay2}`}>
          <h3>Anxiety & Panic Therapy</h3>
          <p>
            Helping adults manage anxiety, panic, and chronic overthinking in a calm, structured way. Together we explore the patterns behind worry and tension while building practical tools to regulate both mind and body. Therapy supports better sleep, emotional steadiness, and a greater sense of control in everyday life.
          </p>

          <div className={styles.imageWrap}>
            <img src="/special1.jpg" alt="Self esteem" />
          </div>
        </div>

        {/* CARD 2 */}
        <div className={`${styles.card} ${styles.fadeUp} ${styles.delay3}`}>
          <h3>Trauma Therapy (EMDR + CBT)</h3>
          <p>
           Healing past experiences through paced, evidence-based trauma therapy focused on safety and stabilization. Sessions help process difficult memories while strengthening emotional resilience. The goal is to reduce overwhelm and create a deeper sense of security in the present.
          </p>

          <div className={styles.imageWrap}>
            <img src="/special2.jpg" alt="Relationships" />
          </div>
        </div>

        {/* CARD 3 */}
        <div className={`${styles.card} ${styles.fadeUp} ${styles.delay4}`}>
          <h3>Burnout & High-Pressure Stress</h3>
          <p>
            Supporting high-performing adults who feel exhausted by constant pressure and perfectionism. Therapy creates space to slow down, reconnect with personal needs, and restore balance. Clients develop healthier ways to sustain success without sacrificing wellbeing.
          </p>

          <div className={styles.imageWrap}>
            <img src="/special3.jpg" alt="Burnout" />
          </div>
        </div>

      </div>
    </section>
  );
}
