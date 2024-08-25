import style from "./skills.module.css";
export default function Skills() {
  return (
    <section className={style["skills"]} id="skills">
      <h2 className={style["heading"]}>
        My <span>Skills</span>
      </h2>
      <div className={style["skills-row"]}>
        <div className={style["skills-column"]}>
          <h3 className={style["title"]}> Skills</h3>
          <div className={style["skills-box"]}>
            <div className={style["skills-content"]}>
              <div className={style["progress"]}>
                <h3>
                  HTML <span>30%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  CSS <span>30%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  C <span>50%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Python <span>50%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other Skills */}
        <div className={style["skills-column"]}>
          <h3 className={style["title"]}>Other Skills</h3>
          <div className={style["skills-box"]}>
            <div className={style["skills-content"]}>
              <div className={style["progress"]}>
                <h3>
                  Drawing <span>90%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Painting <span>89%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Fabric Painting <span>89%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>

              <div className={style["progress"]}>
                <h3>
                  Photography <span>70%</span>
                </h3>
                <div className={style["bar"]}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="mailto:aleenapmathews2004@gmail.com?subject=Hire%20Me&body=Hello%20How%20are%20you">
        Link text
      </a>
    </section>
  );
}
