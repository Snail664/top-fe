import React, { useEffect, useRef } from "react";
import bgPic from "./bg gradient.png";
import middlePic from "./middle.png";
import frontPic from "./front.png";
import "./MainSection.css";
import userEvent from "@testing-library/user-event";

const MainSection = () => {
  let bg = useRef();
  let middle = useRef();
  let front = useRef();

  useEffect(() => {
    // document.addEventListener("scroll", function () {
    //   let scrollY = window.scrollY;
    //   console.log(scrollY);
    //   bg.current.style.top = scrollY + "px";
    //   middle.current.style.top = scrollY + "px";
    //   front.current.style.top = scrollY * 0.5 + "px";
    // }
    // );
  }, []);

  return (
    <section id="main-section" className="main-section">
      <img ref={bg} src={bgPic} id="bg" />
      <img ref={middle} src={middlePic} id="middle" />
      <img ref={front} src={frontPic} id="front" />
    </section>
  );
};

export { MainSection as default };
