import styles from "./section.module.css";

export default function Section() {
  return (
    <section className={styles["home"]} id="home">
      <div className={styles["home-content"]}>
        <h1>
          Hi,I&apos;m <span>Aleena P Mathews</span>
        </h1>
        <div className={styles["text-animate"]}>
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Welcome to my portfolio website!. This
          website is a space where I blend my technical skills with my creative
          interests, showcasing a collection of my work.I invite you to explore,
          learn more about what I do, and hopefully, get inspired along the way.
        </p>
        <div className={styles["btn-box"]}>
          <a href="#" className={styles["btn"]}>
            Hire Me
          </a>
          <a href="#" className={styles["btn"]}>
            Let&apos;s Talk
          </a>
        </div>
      </div>
      <div className={styles["home-img"]}></div>
    </section>
  );
}
