import React from "react";
import Image from "next/image";

export default function OurFeatures() {
  return (
    <div className="mx-auto flex flex-col w-full md:w-[834px] h-auto md:h-[785px] items-center gap-8 md:gap-48 relative">
      <div className="relative w-full md:w-[796px] mt-[-1.00px] transition-all duration-[0.6s] ease-[ease] font-bold text-text-color text-4xl md:text-5xl text-center tracking-[0] leading-[48px]">
        Our Features
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-70 self-stretch w-full overflow-hidden relative">
        <div className="relative w-full md:w-[33%] h-[450px]">
          <Image
            className="absolute top-0 left-0 w-full object-cover max-w-full h-auto"
            alt="Wailing Wall"
            src="/static/landing-page/wailing-wall.png"
            width={850}
            height={450}
          />
        </div>
        <div className="relative w-full md:w-[33%] h-[450px]">
          <Image
            className="absolute top-0 left-0 w-full object-cover max-w-full h-auto"
            alt="Prayer Chain"
            src="/static/landing-page/prayer-chain.svg"
            width={850}
            height={450}
          />
        </div>
        <div className="relative w-full md:w-[33%] h-[450px]">
          <Image
            className="absolute top-0 left-0 w-full h-auto object-cover max-w-full"
            alt="Stories"
            src="/static/landing-page/story.svg"
            width={850}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}