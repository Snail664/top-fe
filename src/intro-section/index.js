import React from "react";
import "./IntroSection.css";
import gsap, { random } from "gsap";
import Foreground from "./Foreground";
import FrontBuildings from "./FrontBuildings";
import BackBuildings from "./BackBuildings";
import MiddleBuildings from "./MiddleBuildings";
import Sky from "./Sky";
import Cloud from "./Cloud";
import { useEffect, useRef } from "react";
import Laser from "./Laser";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const ASPECT = WIDTH / HEIGHT;

const IntroSection = () => {
  const cloudRef1 = useRef();
  const cloudRef2 = useRef();
  const cloudRef3 = useRef();
  const cloudRef4 = useRef();
  const cloudRef5 = useRef();
  const laserRef1 = useRef();
  const laserRef2 = useRef();
  const laserRef3 = useRef();
  const titleRef = useRef();

  const cloudRefs = [cloudRef1, cloudRef2, cloudRef3, cloudRef4, cloudRef5];
  const laserRefs = [laserRef1, laserRef2, laserRef3];

  useEffect(() => {
    // intro fade in
    var introTimeline = gsap.timeline({ delay: 1 });

    introTimeline.from(titleRef.current, { opacity: 0, duration: 1 });

    // lasers
    laserRefs.forEach((item, index) => {
      var total = laserRefs.length;
      var regionWidth = WIDTH / total;
      var laserTimeline = gsap.timeline({ repeat: -1, repeatRefresh: true });

      var setLaser = gsap.set(item.current, {
        x: `random(${index * regionWidth}, ${(index + 1) * regionWidth})`,
      });

      var fromtoLaser = gsap.fromTo(
        item.current,
        { height: 0, width: 0 },
        {
          height: 1070,
          width: 45,
          duration: 1,
          delay: "random(1,5)",
        }
      );

      var toLaser = gsap.to(item.current, { height: 0, width: 0, delay: 1 });

      laserTimeline.add(setLaser);
      laserTimeline.add(fromtoLaser);
      laserTimeline.add(toLaser);
    });

    // clouds
    cloudRefs.forEach((item) =>
      gsap.to(item.current, {
        x: 2000,
        duration: "random(25:45)",
        delay: "random(1,30)",
        ease: "none",
        repeat: -1,
      })
    );
  });
  return (
    <div className="sect1">
      <div ref={titleRef} className="title">
        <span style={{ color: "#FEBBE3" }}>SCSE TOP</span>
        <span style={{ color: "#D896FF" }}>2022</span>
      </div>
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH + 250 * ASPECT} ${HEIGHT + 250}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Sky />
        <BackBuildings />
        <Laser ref={laserRef1} x={500} height={0} />
        <Laser ref={laserRef2} x={500} height={0} />
        <Laser ref={laserRef3} x={500} height={0} />
        <MiddleBuildings />
        <FrontBuildings />
        <Foreground />
        <Cloud ref={cloudRef1} x="-264" y="10" />
        <Cloud ref={cloudRef2} x="-264" y="50" />
        <Cloud ref={cloudRef3} x="-264" y="100" />
        <Cloud ref={cloudRef4} x="-264" y="150" />
        <Cloud ref={cloudRef5} x="-264" y="200" />
      </svg>
    </div>
  );
};

export { IntroSection as default };
