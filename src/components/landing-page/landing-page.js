import React from "react";
import Footer from "../footer";
import Hero from "./landing-page-components/hero";
import OurFeatures from "./landing-page-components/our-features";
import TrustedByLogos from "./landing-page-components/trusted-by-logos";
import Navbar from "../navbar";

export default function LandingPage() {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full">
      <Navbar />
      <div className="w-full max-w-screen-lg px-4 py-8">
        <Hero />
        <TrustedByLogos />
        <OurFeatures />
      </div>
      <Footer />
    </div>
  );
}