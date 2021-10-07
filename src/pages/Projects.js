import React, { useState, useEffect } from "react";
import styled from "styled-components";
import projData from "../assets/PROJS";
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
const moPa = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const moChil = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

export default function Main() {
  const [pData, setPData] = useState(projData);
  const [search, setSearch] = useState("");

  function searchFunc() {
    if (search !== "") {
      const searchedData = pData.filter((data) =>
        data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setPData(searchedData);
      console.log(searchedData);
    } else {
      setPData(projData);
    }
  }
  useEffect(() => {
    searchFunc();
  }, [search]);

  return (
    <Container
      variants={inOutfade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link className="cross" to="/">
        <AiOutlineClose />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <h2 className="title">Projects</h2>
        <input
          type="input"
          name="name"
          id="name"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <motion.div
        className="proj-con"
        variants={moPa}
        initial="initial"
        animate="animate"
      >
        {pData.map((proj) => (
          <motion.div
            key={proj.id}
            className="projItem"
            style={{ backgroundImage: `url(${proj.img})` }}
            variants={moChil}
          >
            <h3>{proj.name}</h3>
            <span>{proj.desc}</span>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 80vw;
  height: 80vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  overflow-x: hidden;
  background-color: var(--main-50);
  padding-right: 30px;
  padding-left: 30px;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 98vh;
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
  input {
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
  .proj-con {
    display: flex;
    flex-direction: column;
  }
  .projItem {
    width: 100%;
    height: 100px;
    transition: height ease 0.5s;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid var(--bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 0.78;
    &:hover {
      opacity: 1;
      height: 200px;
    }
    &:hover span {
      transform: translateY(10px);
      opacity: 1;
    }
  }
  h3 {
    background: rgba(255, 255, 255, 0.5);
    padding: 5px;
    border-radius: 5px;
  }
  span {
    background: rgba(255, 255, 255, 0.5);
    padding: 5px;
    border-radius: 5px;
    transform: translateY(300px);
    opacity: 0;
    transition: all ease 0.5s;
    text-align: center;
    font-weight: bold;
  }
`;
