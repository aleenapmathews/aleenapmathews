import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <a href="#" className={styles["logo"]}>
        Aleena
      </a>
      <div className={`bx bx-menu ${styles["menu-icon"]}`}></div>
      <nav className={styles["navbar"]}>
        <a href="#home" className={styles["active"]}>
          Home
        </a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    
  );
}
