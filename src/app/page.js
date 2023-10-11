import React from "react";
import Link from "next/link";
import LandingPage from "@/components/landing-page/landing-page";

export default function Page() {
  return (
    <>
      <Link rel="icon" href="/favicon.ico" sizes="any" />
      <LandingPage />
    </>
  );
}
