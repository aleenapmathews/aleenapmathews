"use client";
import { use, useState } from "react";
import style from "./contact.module.css";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(name, email, number, subject, message);
  }

  return (
    <section className={style["contact"]} id="contact">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
        className={style["heading"]}
      >
        Contact <span> Me!</span>
      </motion.h2>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="7f9fdfb0-2c23-4572-8d6d-4441470558b0"
        ></input>
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: "none" }}
        ></input>
        <div className={style["input-box"]}>
          <div className={style["input-field"]}>
            <input
              name="name"
              value={name}
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <span className={style["focus"]}></span>
          </div>

          <div className={style["input-field"]}>
            <input
              name="email"
              value={email}
              type="email"
              placeholder="Email address"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span className={style["focus"]}></span>
          </div>
        </div>

        <div className={style["input-box"]}>
          <div className={style["input-field"]}>
            <input
              name="number"
              value={number}
              type="number"
              placeholder="Mobile Number"
              required
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <span className={style["focus"]}></span>
          </div>

          <div className={style["input-field"]}>
            <input
              name="subject"
              value={subject}
              type="text"
              placeholder="Email Subject"
              required
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <span className={style["focus"]}></span>
          </div>
        </div>

        <div className={style["textarea-field"]}>
          <textarea
            value={message}
            name="message"
            id=""
            rows={10}
            cols={30}
            placeholder="Your Message"
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
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
