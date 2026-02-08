import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* TOP FOOTER */}
      <div className={styles.top}>

        {/* LEFT */}
        <div className={styles.col}>
          <h2 className={styles.brand}>Lilac Template</h2>

          <p>
            123 Example Road<br />
            Minneapolis, MN
          </p>

          <p className={styles.links}>
            <a href="mailto:email@example.com">
              email@example.com
            </a>
            <br />
            <a href="tel:5555555555">
              (555) 555-5555
            </a>
          </p>
        </div>

        {/* MIDDLE */}
        <div className={styles.col}>
          <h3>Hours</h3>
          <p>
            Monday – Friday<br />
            10am – 6pm
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.col}>
          <h3>Find</h3>

          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>

        <div className={styles.legal}>
          <a href="#">Privacy & Cookies Policy</a>
          <a href="#">Good Faith Estimate</a>
          <a href="#">Website Terms & Conditions</a>
          <a href="#">Disclaimer</a>
        </div>

        <p className={styles.credit}>
          Website Template Credits: Go Bloom Creative
        </p>

        <p className={styles.copy}>
          © 2024 Your Business Name Here, LLC.
        </p>

      </div>

    </footer>
  );
}
