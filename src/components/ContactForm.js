import React from "react";
import styled from "styled-components";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";

const parentVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const childVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjvjzejb");
  return (
    <ContactFormStyle onSubmit={handleSubmit} method="post">
      <motion.div
        variants={parentVariant}
        initial={"initial"}
        animate={"animate"}
      >
        <motion.label htmlFor="name" variants={childVariant}>
          Name
          <input type="input" name="name" id="name" />
        </motion.label>
        <motion.label htmlFor="email" variants={childVariant}>
          Email
          <input type="email" name="email" id="email" />
        </motion.label>

        <motion.label htmlFor="email" variants={childVariant}>
          Your Message
          <textarea name="message" id="message" rows="6" />
        </motion.label>

        <motion.button
          type="submit"
          disabled={state.submitting}
          variants={childVariant}
        >
          Send
        </motion.button>
        {state.succeeded && (
          <motion.p
            className="s-msg"
            animate={{
              opacity: 0,
              transition: {
                delay: 5,
              },
            }}
          >
            thanks...i try to contact you as soon as posible.
          </motion.p>
        )}
      </motion.div>
    </ContactFormStyle>
  );
}

const ContactFormStyle = styled.form`
  label {
    color: var(--gray-1);
    font-size: 1.3rem;
  }
  input,
  textarea {
    width: 100%;
    background-color: var(--bg);
    padding: 10px;
    border-radius: 12px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 19px;
    margin-bottom: 20px;
    margin-top: 5px;
  }
  button {
    font-size: 19px;
    padding: 0.5em 1.7em;
    border: 2px solid var(--bg);
    border-radius: 8px;
    display: inline-block;
    color: var(--bg);
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: var(--bg);
      opacity: 0.9;
      color: #fff;
      transition: all 0.3s ease;
    }
  }
  @media only screen and (max-width: 768px) {
    .button,
    a {
      font-size: 1rem;
    }
  }

  .s-msg,
  .uns-msg {
    color: var(--main-100);
    font-size: 1.1rem;
    margin: 20px;
    text-align: center;
    background-color: var(--bg);
    padding: 6px;
    border-radius: 10px;
  }
  .uns-msg {
    color: #e60180;
  }
`;
