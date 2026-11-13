import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const spreadRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP context for clean garbage collection on unmount
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image entrance with subtle scale & brightness bloom
      tl.fromTo(
        bgImageRef.current,
        { scale: 1.15, filter: 'brightness(0.6)' },
        { scale: 1.02, filter: 'brightness(0.82)', duration: 2.2, ease: 'power2.out' },
        0
      );

      // Top badge reveal
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.75 },
        0.2
      );

      // Headline lines stagger reveal
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.hero-line');
        tl.fromTo(
          lines,
          { opacity: 0, y: 45, rotateX: 12 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.3, stagger: 0.15 },
          0.5
        );
      }

      // Primary action reveal
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1 },
        1.1
      );

      // Subtle depth-of-field background parallax when scrolling down to Scene 02
      gsap.to(bgImageRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="snap-scene relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-forest-950 text-ivory pt-20 sm:pt-24 lg:pt-[88px] pb-10 sm:pb-12 lg:pb-14 px-5 sm:px-8 lg:px-10 xl:px-14"
    >
      {/* Full-Screen Hero Visual Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src="/images/mera-hero.jpg"
          alt="MERA Reformer Pilates Studio sunlit space with white oak reformers"
          className="w-full h-full object-cover object-center will-change-transform"
        />
        {/* Layered Cinematic Vignettes for Pristine Editorial Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-black/55 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/25 to-forest-950/45 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,16,11,0.5)_100%)] pointer-events-none"></div>
      </div>

      {/* Top Context Eyebrow Bar */}
      <div ref={badgeRef} className="relative z-10 w-full max-w-[1840px] mx-auto shrink-0 pt-1">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-forest-950/65 backdrop-blur-md border border-ivory/15">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="editorial-caps text-[10px] sm:text-[10.5px] font-semibold text-sand-200 tracking-[0.24em]">
              SoHo Atelier • Intimate 6 Reformers Only
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sand-300 text-xs">
            <span className="editorial-caps text-[10px] tracking-[0.2em] text-ivory/75">
              Spring Intake Open
            </span>
            <span aria-hidden="true">•</span>
            <span className="editorial-caps text-[10px] tracking-[0.2em] text-sand-200">
              Bespoke Carriage Biomechanics
            </span>
          </div>
        </div>
      </div>

      {/* Center Immersive Typographic Spread */}
      <div ref={spreadRef} className="relative z-10 w-full max-w-[1840px] mx-auto my-auto py-6 lg:py-4">
        <div className="max-w-4xl space-y-3.5 sm:space-y-5 xl:space-y-6" ref={headlineRef}>
          
          {/* Subtitle / Slogan */}
          <div className="hero-line flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-sand-300/60"></span>
            <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-sand-200 font-light tracking-wide">
              Where breath shapes form.
            </p>
          </div>

          {/* Grand Oversized Serif Display Headline */}
          <h1 className="hero-line font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(3.6rem,5.5vw,6.5rem)] font-light text-ivory uppercase tracking-tight leading-[0.94]">
            The Architecture <br />
            <span className="font-serif italic font-normal text-sand-200/90 tracking-normal">
              of Resistance.
            </span>
          </h1>

          {/* Concise, confident editorial statement */}
          <p className="hero-line text-sm sm:text-base lg:text-base xl:text-lg text-sand-200/90 font-light max-w-xl leading-relaxed">
            A boutique reformer sanctuary in SoHo designed for deep postural realignment. 
            Stripped of fitness noise, calibrated to the rhythm of slow eccentric spring tension.
          </p>

          {/* Primary Call to Action */}
          <div ref={ctaRef} className="pt-1 sm:pt-2 flex items-center">
            <a
              href="#the-method"
              className="px-7 py-3.5 xl:px-8 xl:py-4 rounded-full border border-ivory/30 hover:border-ivory text-ivory text-xs editorial-caps font-medium backdrop-blur-sm hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
            >
              <span>Explore The Method</span>
              <ArrowDown className="w-3.5 h-3.5 text-sand-200 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
