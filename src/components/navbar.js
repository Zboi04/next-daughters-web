// This component is ready for production!

import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 md:py-4 bg-gray-50 shadow-background-blur">
      <div className="flex items-center gap-2 ml-7">
        <Image
          className="w-8 h-8 md:w-10 md:h-10"
          alt="Daughters Icon"
          src="/static/landing-page/daughters-icon.png"
          width={35}
          height={35}
        />
        <Image
          className="w-32 h-4 md:w-40 md:h-5"
          alt="DAUGHTERS"
          src="/static/landing-page/DAUGHTERS.png"
          width={183.4}
          height={19.28}
        />
      </div>
    </div>
  );
}
