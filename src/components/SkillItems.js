import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function SkillItems({ title, items }) {
  return (
    <Skillitems>
      <div>
        <h3>{title}</h3>
      </div>
      <motion.div
        style={{ display: "flex", flexWrap: "wrap" }}
        variants={moPa}
        initial="initial"
        animate="animate"
      >
        {items.map((itm, index) => {
          return (
            <motion.div key={index} className="sItems" variants={moChil}>
              <p>#{itm}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Skillitems>
  );
}

const Skillitems = styled.div`
  h3 {
    font-size: 25px;
    letter-spacing: 1rem;
    margin-bottom: 20px;
    margin-left: 12px;
    @media screen and (max-width: 768px) {
      font-size: 25px;
      margin-bottom: 5px;
      margin-top: 10px;
    }
  }
  .sItems {
    background: var(--bg);
    color: #fff;
    padding: 7px;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      margin: 3px;
    }
  }
`;
