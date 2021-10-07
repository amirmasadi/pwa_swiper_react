import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const inOutfade = {
  initial: { opacity: 0, x: 0, y: 0 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function NotFound() {
  return (
    <Container
      variants={inOutfade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="title">4 0 4</h2>
      <Link className="cross" to="/">
        <AiOutlineClose />
      </Link>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 80vw;
  height: 80vh;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: var(--main-50);
  padding-right: 20px;
  padding-left: 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 98vh;
    width: 85vw;
    flex-direction: column;
  }

  .cross {
    font-size: 3rem;
    color: var(--bg);
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all ease 0.5s;
    &:hover {
      opacity: 0.5;
      color: var(--main-100);
    }
  }
  .title {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0.5rem;
    @media screen and (max-width: 768px) {
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 2rem;
    }
  }
  .form-container {
    width: 50%;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
`;
