import styled from "styled-components";
import ITEMSDATA from "../assets/MIDATA";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";
import { useState } from "react";

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

// install Swiper modules
SwiperCore.use([Mousewheel]);

export default function SwiperPage() {
  //const [WIDTH, setWIDTH] = useState(window.innerWidth < 780 ? true : false);
  const [firstSlide, setfirstSlide] = useState(false);
  const [lastSlide, setlastSlide] = useState(false);

  return (
    <Container
      variants={inOutfade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {firstSlide && <h3 className="name">amirasadi</h3>}
      {lastSlide && (
        <a
          href="https://github.com/amirmasadi/pwa_swiper_react/tree/main/src"
          target="_blank"
          rel="noreferrer"
          className="git-hub"
        >
          git hub
        </a>
      )}
      <Swiper
        direction={window.innerWidth < 780 ? "vertical" : "horizontal"}
        slidesPerView={5}
        spaceBetween={0}
        mousewheel={true}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={2}
        slideToClickedSlide={true}
        //virtualTranslate={true}
        onSlideChange={(index) => {
          index.activeIndex === 0 ? setfirstSlide(true) : setfirstSlide(false);
          index.activeIndex === ITEMSDATA.length - 1
            ? setlastSlide(true)
            : setlastSlide(false);
        }}
      >
        {ITEMSDATA.map((itm) => (
          <SwiperSlide key={itm.id} className="main-items">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 80vw;
  height: 80vh;
  z-index: 10;
  display: flex;
  position: relative;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
    flex-direction: column !important;
    .title-top {
      //display: none;
    }
  }

  .main-items {
    overflow: hidden;
    padding: 5px;
    width: calc(100% / 5) !important;
    height: 100% !important;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid var(--bg);
    transition: all ease 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 100% !important ;
      height: calc(100% / 5) !important;
    }

    &:hover {
      //background-color: var(--main-50);
      @media screen and (max-width: 768px) {
        width: 100%;
        height: calc(100% / 1.5);
      }
    }
    .title-bottom {
      transition: all ease-in-out 0.5s;
      margin-bottom: 10px;
    }
    .icon {
      transition: all ease 1s;
      transition-delay: 0.5s;
      display: felx;
      justify-content: center;
      align-items: center;
      width: 55px;
      height: 55px;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
      transform: scale(1) translateY(0px);
      &:hover {
        opacity: 0.5;
      }
    }
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
      }

      70% {
        transform: scale(1.1);
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
      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    .sum-text {
      color: #fff;
      font-weight: 300;
      text-align: center;
      margin-top: -500px;
      padding: 20px;
      opacity: 0;
      transition: all ease 1s;
      max-width: 350px;
      font-size: 1.2rem;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
  .hoverd {
    border: 10px solid black;
  }
  .name {
    color: var(--main-50);
    font-size: 3rem;
    position: absolute;
    top: 40%;
    left: 15%;
    @media screen and (max-width: 768px) {
      color: var(--bg);
      font-size: 2rem;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .git-hub {
    color: var(--main-50);
    font-size: 3rem;
    position: absolute;
    bottom: 50%;
    right: 15%;
    font-family: AbrilFatface;
    text-decoration: underline;
    &:hover {
      opacity: 0.7;
    }

    @media screen and (max-width: 768px) {
      color: var(--bg);
      font-size: 2rem;
      bottom: 15%;
      right: 50%;
      transform: translateX(50%);
    }
  }
`;
