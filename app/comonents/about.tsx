import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles["about"]} id="about">
      <h2 className={styles["heading"]}>
        About <span>Me</span>
      </h2>

      <div className={styles["about-content"]}>
        <h3>Frontend Developer!</h3>
        <p>
          Hello! I'm Aleena P Mathews, a 3rd-year Computer Science Engineering
          student at Saintgits College of Engineering. My passions lie in the
          world of creativity and technology. When I'm not diving deep into
          code, you'll find me expressing myself through drawing and painting,
          or relaxing with some good music. I've also taken my love for
          creativity online by designing my own portfolio website. It's a space
          where I showcase my work and projects, blending my technical skills
          with my artistic side.
        </p>

        <div className={`${styles["btn-box"]} ${styles["btns"]}`}>
          <a href="#" className={styles["btn"]}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
