import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Intro = () => {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });

    timeline
      .from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className="intro">
      <div ref={backgroundImage} className="backgroundImage">
        <Image
          src="/images/background-one.jpg"
          alt="Background image"
          fill
          className="object-cover"
        />
      </div>

      <div className="introContainer">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="introImage"
        >
          <Image
            src="/images/background-two.jpg"
            alt="Background image"
            fill
            className="object-cover object-top"
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Happy Birthday
        </h1>
      </div>
    </div>
  );
};

export default Intro;
