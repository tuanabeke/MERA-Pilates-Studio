import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophyManifesto } from './components/PhilosophyManifesto';
import { SignatureClasses } from './components/SignatureClasses';
import { StudioSanctuary } from './components/StudioSanctuary';
import { InstructorSpotlight } from './components/InstructorSpotlight';
import { ScheduleSection } from './components/ScheduleSection';
import { MembershipSection } from './components/MembershipSection';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after initial mount and font load to guarantee pinpoint triggers
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-forest-950 text-ivory selection:bg-olive selection:text-ivory font-sans antialiased relative min-h-screen">
      {/* Luxury Editorial Navigation */}
      <Navbar />

      {/* Main Immersive Homepage Flow */}
      <main>
        {/* Scene 01: Hero — Full-Screen Visual Canvas & Entrance Motion */}
        <Hero />

        {/* Scene 02: The MERA Method — Editorial Asymmetry & Spring Resistance */}
        <PhilosophyManifesto />

        {/* Scene 03: Classes — Interactive Lookbook & Trajectories */}
        <SignatureClasses />

        {/* Scene 04: The Sanctuary / Studio — Cinematic Panoramic Scale & Acoustic Serenity */}
        <StudioSanctuary />

        {/* Scene 05: Master Movement Directors — High-Fashion Portrait Spotlight */}
        <InstructorSpotlight />

        {/* Scene 06: Studio Schedule — Live Daily Timetable & Booking Inquiry */}
        <ScheduleSection />

        {/* Scene 07: Membership & SoHo Atelier Location — Clear Architectural Commitments */}
        <MembershipSection />
      </main>

      {/* Editorial Colophon / Footer */}
      <Footer />
    </div>
  );
}

export default App;
