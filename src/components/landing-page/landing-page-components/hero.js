"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-200px)" },
    config: { duration: 1200 },
  });

  const slideIn = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-300px)" },
    config: { duration: 1200 },
  });

  return (
    <animated.div
      className="flex items-center justify-center w-full min-h-[500px] md:min-h-[785px] px-4 mb-[300px] md:mb-[200px] relative"
      style={fadeIn}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
        <div
          className="flex flex-col items-center justify-center gap-6 gap-x-14 relative w-full"
          style={slideIn}
        >
          <div className="relative w-fit mb-4 md:mb-6 lg:mb-10 text-shadow[-1px -1px 10px #48423a1a] font-bold text-text-color text-3xl md:text-5xl lg:text-7xl text-center whitespace-nowrap">
            DOWNLOAD NOW
          </div>
          <div className="flex items-center justify-center gap-3 w-full md:w-[500px]">
            <div
              className="relative w-full md:w-[305px] h-[48px] bg-[#ffffffcc] rounded-[15px] shadow-background-blur backdrop-blur-[35px] backdrop-brightness-[100%] -webkit-backdrop-filter:blur(35px)_brightness(100%)"
              style={{ minWidth: "150px" }}
            />
            <button
              className="flex items-center justify-center gap-2 px-4 md:px-10 py-2 md:py-3 bg-text-color rounded-[15px] overflow-hidden shadow-background-blur backdrop-blur-[35px] backdrop-brightness-[100%] -webkit-backdrop-filter:blur(35px)_brightness(100%) transition-all duration-300 ease-in-out hover:scale-90"
              style={{ minWidth: "100px" }}
            >
              <div className="relative w-fit mt-[-1.00px] font-medium text-background-color text-lg md:text-2xl text-center tracking-[0] leading-[20px] whitespace-nowrap font-montserrat-medium">
                Sign Up
              </div>
            </button>
          </div>
          <p className="relative w-full md:w-[443px] text-shadow[-1px -1px 10px #48423a1a] font-normal text-afa-1-8e text-lg md:text-xl text-center tracking-[0] leading-[35px] font-montserrat-regular">
            A global initiative to mobilize a million Esther’s at the Wailing
          </p>
        </div>
        <Image
          className="w-[100px] h-[250px] md:w-[200px] md:h-[350px] lg:w-[450px] lg:h-[725px]"
          alt="Daughters iPhone"
          src="/static/landing-page/daughters-iphone-svg.svg"
          width={100}
          height={250}
          placeholder="blur"
          blurDataURL="/static/landing-page/daughters-iphone-svg.png"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </animated.div>
  );
}
