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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          provident aperiam dicta voluptatem, officia aspernatur, illum odit
          neque necessitatibus sed eaque fuga eos, nobis placeat est pariatur.
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
      <div className={styles["home-img"]}>
      </div>
    </section>
  );
}
