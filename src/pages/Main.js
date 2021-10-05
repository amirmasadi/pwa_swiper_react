import React from "react";
import styled from "styled-components";
import ITEMSDATA from "../assets/MIDATA";
import { Link } from "react-router-dom";
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
      key={Math.random()}
      variants={inOutfade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {ITEMSDATA.map((itm) => (
        <div key={itm.id} className="main-items">
          <div className="flex-col-cen">
            <h2 className="title title-top">{itm.title}</h2>
            <p className="sum-text">{itm.sum}</p>
          </div>
          <div className="flex-col-cen">
            <Link to={itm.to} className="icon">
              {itm.icon}
            </Link>
            <Link to={itm.to} className="title title-bottom">
              {itm.title}
            </Link>
          </div>
        </div>
      ))}
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 80vw;
  height: 80vh;
  z-index: 10;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
    flex-direction: column;
    .title-top {
      display: none;
    }
    .sum-text {
      //display: none;
    }
  }

  .main-items {
    overflow: hidden;
    padding: 5px;
    width: calc(100% / 5);
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid var(--bg);
    transition: all ease 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: calc(100% / 5);
      //flex-direction: row;
    }
    &:hover {
      width: calc(100% / 2.5);
      background-color: var(--main-50);
      @media screen and (max-width: 768px) {
        width: 100%;
        height: calc(100% / 1.5);
      }
      @media screen and (min-width: 768px) {
        &:hover .title-bottom {
          transform: translateY(100px);
          opacity: 0;
        }
      }

      &:hover .title-top {
        transform: translateY(0px);

        opacity: 1;
      }
      &:hover .sum-text {
        margin-top: 0px;
        opacity: 1;
      }
      &:hover .icon {
        transform: translateY(-50px);
        animation: pulse 2s infinite;
      }
    }
    .title-bottom {
      transition: all ease-in-out 0.5s;
      margin-bottom: 10px;
    }
    .icon {
      transition: transform ease 1s;
      transition-delay: 0.5s;
      display: felx;
      justify-content: center;
      align-items: center;
      width: 55px;
      height: 55px;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
      transform: scale(1);
      &:hover {
        opacity: 0.8;
        transform: scale(0.95);
      }
    }
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }
    .title {
      color: #fff;
      font-weight: 300;
    }
    .flex-col-cen {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .title-top {
      color: #fff;
      font-weight: bold;
      font-size: 3rem;
      opacity: 0;
      transition: all ease 0.6s;
      transition-delay: 0.5s;
    }
    .sum-text {
      color: #fff;
      font-weight: 300;
      text-align: center;
      margin-top: -500px;
      padding: 20px;
      opacity: 0;
      transition: all ease 1s;
      width: 360px;
    }
  }
  .hoverd {
    border: 10px solid black;
  }
`;
