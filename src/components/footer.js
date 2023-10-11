// This component is ready for production!

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-8 md:py-12 bg-d-9d-9d-9 border-t-2 border-gray-600">
      <div className="text-center md:text-left mb-4 md:mb-0 font-default-heading font-[number:var(--default-heading-font-weight)] text-text-color text-[length:var(--default-heading-font-size)] tracking-[var(--default-heading-letter-spacing)] leading-[var(--default-heading-line-height)] whitespace-nowrap [font-style:var(--default-heading-font-style)] ml-10">
        © 2023 DaughtersApp, LLC.
      </div>
      <div className="text-center md:text-left font-default-heading font-[number:var(--default-heading-font-weight)] text-text-color text-[length:var(--default-heading-font-size)] tracking-[var(--default-heading-letter-spacing)] leading-[var(--default-heading-line-height)] whitespace-nowrap [font-style:var(--default-heading-font-style)] mx-auto">
        Privacy & Terms of Use
      </div>
      <div className="flex justify-center md:justify-end mr-10">
        <Image
          className="w-6 h-6 md:w-8 md:h-8"
          alt="Instagram Icon"
          src="/static/landing-page/insta-icon.svg"
          width={25.42}
          height={25.46}
        />
      </div>
    </div>
  );
}