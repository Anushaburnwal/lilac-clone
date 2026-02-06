import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <h1 className={styles.title}>
        Lilac Template
      </h1>

      <div className={styles.links}>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>

    </nav>
  );
}
