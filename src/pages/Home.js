import React from 'react'
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/improveSkills";
import QuoteSession from "../components/QuoteSession";
import ChefsSection from "../components/ChefsSection"


export default function Home() {
  return (
    <div>
    <HeroSection />
    <ImproveSkills />
    <QuoteSession />
    <ChefsSection />
    </div>
  )
}
