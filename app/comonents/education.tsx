"use client";
import { motion } from "framer-motion";
import style from "./education.module.css";

export default function Education() {
  return (
    <section className={style["education"]} id="education">
      <h2 className={style["heading"]}>
        My{" "}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          Journey
        </motion.span>
      </h2>
      <div className={style["education-row"]}>
        <div className={style["education-column"]}>
          <h3 className={style["title"]}>Education</h3>
          <div className={style["education-box"]}>
            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2017 - 2018
                </div>
                <h3>Master Degree-University</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur expedita inventore earum quisquam similique,
                  dignissimos in unde necessitatibus cum animi.
                </p>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className="bx bxs-calendar"></i>2017 - 2018
                </div>
                <h3>Master Degree-University</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur expedita inventore earum quisquam similique,
                  dignissimos in unde necessitatibus cum animi.
                </p>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className="bx bxs-calendar"></i>2017 - 2018
                </div>
                <h3>Master Degree-University</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur expedita inventore earum quisquam similique,
                  dignissimos in unde necessitatibus cum animi.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* work Experience */}
        <div className={style["education-column"]}>
          <h3 className={style["title"]}>Experience</h3>
          <div className={style["education-box"]}>
            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2017 - 2018
                </div>
                <h3>Master Degree-University</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur expedita inventore earum quisquam similique,
                  dignissimos in unde necessitatibus cum animi.
                </p>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2017 - 2018
                </div>
                <h3>Master Degree-University</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur expedita inventore earum quisquam similique,
                  dignissimos in unde necessitatibus cum animi.
                </p>
              </div>
            </div>

            <div className={style["education-content"]}>
              <div className={style["content"]}>
                <div className={style["year"]}>
                  <i className={"bx bxs-calendar"}></i>2017 - 2018
                </div>
                <h3>Master Degree-University</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur expedita inventore earum quisquam similique,
                  dignissimos in unde necessitatibus cum animi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
