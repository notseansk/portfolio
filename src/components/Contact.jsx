import React, { useState } from "react";
import "../styles/Contact.scss";
import contact2 from "../assets/contactme3.svg";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
const Contact = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const [btnDisable, setBtnDisable] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnDisable(true);
    try {
      await addDoc(collection(db, "contacts"), inputs);
      setInputs({ name: "", email: "", message: "" });
      toast.success("Message Sent");
      setBtnDisable(false);
    } catch (error) {
      toast.error("Error");
      setBtnDisable(false);

      console.log(error);
    }
  };
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
      transition: {
        delay: 0.2,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
      transition: {
        delay: 0.4,
      },
    },
  };
  return (
    <div className="contact" id="contact">
      <div className="container">
        <motion.form
          {...animations.form}
          className="form"
          onSubmit={submitHandler}
        >
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={changeHandler}
            placeholder="enter your name"
            required
          />
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            placeholder="enter your email"
            required
          />
          <textarea
            type="text"
            name="message"
            value={inputs.message}
            onChange={changeHandler}
            placeholder="enter your message"
            className="grid-col-span-2 message"
            required
          />
          <motion.button
            className={btnDisable && "btn-disabled"}
            disabled={btnDisable}
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
        <aside>
          <img src={contact2} alt="contact" />
        </aside>
      </div>
    </div>
  );
};

export default Contact;
