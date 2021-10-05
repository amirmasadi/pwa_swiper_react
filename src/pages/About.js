import React from "react";
import styled from "styled-components";
import SkillItems from "../components/SkillItems";
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

export default function Main() {
  return (
    <Container
      variants={inOutfade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link className="cross" to="/">
        <AiOutlineClose />
      </Link>{" "}
      <h2 className="title">About Me</h2>
      <div className="con-con">
        <div>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima
            inventore est aut. Dignissimos explicabo consectetur atque aliquid!
            Voluptatem architecto corrupti dolor quidem placeat earum quibusdam
            ullam ratione at ab!
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima
            inventore est aut. Dignissimos explicabo consectetur atque aliquid!
            Voluptatem architecto corrupti dolor quidem placeat earum quibusdam
            ullam ratione at ab!
          </p>
          <p className="about-text mobile-none">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima
            inventore est aut. Dignissimsit amet, consectetur adipisicing elit.
            A minima inventore est aut. Dignissimos explicabo consectetur atque
            aliquid! Voluptatem architecto corrupti dolor quidem placeat earum
            quibusdam ullam ratione at ab!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <SkillItems
              title="Skills"
              items={[
                "HTML",
                "CSS",
                "SASS",
                "BOOTSTRAP",
                "JS",
                "REACT",
                "photoshop",
                "adobe xd",
                "PWA",
                "react-native",
                "Next js",
              ]}
            />
          </div>
        </div>
      </div>
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
  overflow: hideen;
  background-color: var(--main-50);
  padding-right: 30px;
  padding-left: 30px;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 98vh;
    flex-direction: column;

    .mobile-none {
      display: none;
    }
  }

  .cross {
    font-size: 3rem;
    color: var(--bg);
    position: absolute;
    top: 1px;
    right: 10px;
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
  .about-text {
    text-align: justify;
    font-size: 20px;
    line-height: 2.5rem;
    font-weight: bold;
    padding-right: 40px;
    border-right: 2px solid var(--bg);
    @media screen and (max-width: 768px) {
      border-right: none;
      font-size: 16px;
      padding-right: 0px;
      line-height: inherit;
    }
  }
  .con-con {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
