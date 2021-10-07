import React from "react";
import styled from "styled-components";
import Main from "./pages/Main";
import { Switch, Route, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
//import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <Container className="App">
      <div className="shapes shapes-1"></div>
      <div className="shapes shapes-2"></div>
      <div className="shapes shapes-3"></div>
      <div className="shapes shapes-4"></div>
      <div className="overly-blur"></div>
      {/* <AnimatePresence> */}
      <Switch location={location} key={location.pathname}>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {/* </AnimatePresence> */}
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--bg);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .shapes {
    width: 250px;
    height: 250px;
    background-color: var(--main-100);
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 70px 40px var(--main-100);
    opacity: 60%;
  }
  .shapes-1 {
    top: 20%;
    left: -2%;
    animation: hueanimate 10s linear infinite;
  }
  .shapes-2 {
    width: 500px;
    height: 500px;
    bottom: 0;
    right: 0;
    opacity: 40%;
    animation: hueanimate 20s linear infinite;
    animation-delay: 1s;
  }
  .shapes-3 {
    width: 100px;
    height: 100px;
    top: 10%;
    right: 30%;
    animation-delay: 1s;
    animation: hueanimate 15s linear infinite;
  }
  .shapes-4 {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 20%;
    animation: hueanimate 15s linear infinite;
  }
  .overly-blur {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(50px);
  }
  @keyframes hueanimate {
    0%,
    100% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(360deg);
    }
  }
`;

export default App;
