import style from "./contact.module.css";

export default function Contact() {
  return (
    <section className={style["contact"]} id="contact">
      <h2 className={style["heading"]}>
        Contact <span> Me!</span>
      </h2>
      <form action={style["#"]}>
        <div className={style["input-box"]}>
          <div className={style["input-field"]}>
            <input type={style["text"]} placeholder="Full Name" required />
            <span className={style["focus"]}></span>
          </div>

          <div className={style["input-field"]}>
            <input type={style["text"]} placeholder="Email address" required />
            <span className={style["focus"]}></span>
          </div>
        </div>

        <div className={style["input-box"]}>
          <div className={style["input-field"]}>
            <input type="number" placeholder="Mobile Number" required />
            <span className={style["focus"]}></span>
          </div>

          <div className={style["input-field"]}>
            <input type="text" placeholder="Email Subject" required />
            <span className={style["focus"]}></span>
          </div>
        </div>

        <div className={style["textarea-field"]}>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
          ></textarea>
          <span className={style["focus"]}></span>
        </div>

        <div className={`${style["btn-box"]} ${style["btns"]}`}>
          <button type="submit" className={style["btn"]}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
