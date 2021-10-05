import styled from "styled-components";
import ITEMSDATA from "../assets/MIDATA";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

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

export default function SwiperPage() {
  return (
    <div>
      <Container
        key={Math.random()}
        variants={inOutfade}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Link className="cross" to="/">
          <AiOutlineClose />
        </Link>
        <h2 className="title">Contact Me</h2>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
        </Swiper> */}
      </Container>
    </div>
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
`;
