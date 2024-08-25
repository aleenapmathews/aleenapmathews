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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          excepturi impedit odio ut nemo quaerat ratione consequatur.
          Necessitatibus quas consequatur possimus eligendi, magni libero sit
          suscipit, animi maiores unde labore sint architecto natus assumenda
          quo! Beatae similique aspernatur voluptatibus libero! Tempore eius, et
          voluptate repellendus ex laborum doloremque quasi. Culpa?
        </p>
       
        <div className={`${styles['btn-box']} ${styles['btns']}`}>
          <a href="#" className={styles["btn"]}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
