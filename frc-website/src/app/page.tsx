"use client"

import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import MissionVision from "@/components/MissionVision";
import Navbar from "@/components/Navbar";
import OurTeam from "@/components/OurTeam";
import ScrollUp from "@/components/ScrollUp";
import Sponsorship from "@/components/Sponsorship";
import SponsorshipPackages from "@/components/SponsorshipPackages";
import { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <div className="snap snap-y snap-mandatory overflow-scroll h-screen">
        <div id="home" className="snap-start w-full bg-banner-bg bg-center bg-no-repeat bg-cover">
          <div className="w-full flex flex-col h-screen bg-black bg-opacity-80">
              <Navbar />
              <Banner />
          </div>
        </div>
        <div id="about_us" className="snap-start w-full h-screen bg-about-200">
          <AboutMe />
        </div>
        <div id="mission_vision" className="snap-start w-full h-screen bg-mv-200">
          <MissionVision />
        </div>
        <div id="our_team" className="snap-start w-full h-screen bg-about-200">
          <OurTeam />
        </div>
        <div id="sponsor" className="snap-start w-full h-screen bg-mv-200">
          <Sponsorship />
        </div>
        <div id="sponsor_package" className="snap-start w-full h-screen bg-about-200 flex flex-col">,
          <div className="w-full h-full">
            <SponsorshipPackages />

          </div>
          <div className="w-full h-24 bg-black bg-opacity-80">
            <Contact/>
          </div>
        </div>
      </div>
    </main>
  )
}
