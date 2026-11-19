import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export const PhilosophyManifesto: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const innerImgRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState<number>(0);
  const [selectedSpring, setSelectedSpring] = useState<'light' | 'medium' | 'heavy'>('medium');

  const pillars = t.method.pillars;
  const springs = t.method.springs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const isMobile = window.matchMedia('(max-width: 1023px)').matches;

      // Watermark horizontal drift on scroll (desktop only)
      if (watermarkRef.current && !isMobile) {
        gsap.fromTo(
          watermarkRef.current,
          { xPercent: -6 },
          {
            xPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: isMobile ? 16 : 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Architectural aperture image reveal + inner image scale settle
      gsap.fromTo(
        imageFrameRef.current,
        { opacity: 0, scale: isMobile ? 0.99 : 0.96, x: isMobile ? 0 : -20, y: isMobile ? 16 : 0 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: isMobile ? 0.85 : 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (innerImgRef.current && !isMobile) {
        gsap.fromTo(
          innerImgRef.current,
          { scale: 1.1 },
          {
            scale: 1,
            duration: 1.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Right column reveal
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: isMobile ? 0 : 24, y: isMobile ? 16 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          delay: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="the-method"
      data-nav-theme="light"
      ref={sectionRef}
      className="snap-scene relative lg:min-h-[100svh] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[74px] lg:pb-5 2xl:pt-[84px] 2xl:pb-8 bg-ivory text-forest-950 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Watermark Accent */}
      <div
        ref={watermarkRef}
        className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-5"
      >
        <span className="font-serif text-[120px] sm:text-[200px] lg:text-[280px] font-light tracking-tighter text-olive-900 leading-none block whitespace-nowrap">
          {t.method.watermark}
        </span>
      </div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-7 lg:gap-3.5 2xl:gap-6">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-3.5 lg:gap-3 pb-4 lg:pb-2.5 2xl:pb-4 border-b border-olive/15 shrink-0"
        >
          <div className="space-y-1.5 lg:space-y-1 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-mono text-[10px] text-clay-400 font-semibold tracking-widest uppercase">
                {t.method.bracketLabel}
              </span>
              <span className="hidden sm:block h-[1px] w-8 bg-clay-300"></span>
              <span className="editorial-caps text-[10px] max-sm:tracking-[0.18em] text-clay-400 sm:text-olive-500 font-semibold">
                {t.method.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-[2rem] sm:text-5xl lg:text-[38px] 2xl:text-[50px] font-light text-forest-950 leading-[1.08] lg:leading-[1.04] tracking-tight">
              {t.method.headingStart}<span className="italic font-normal text-clay-400">{t.method.headingItalic}</span>
            </h2>
          </div>

          <p className="lg:hidden text-[13.5px] sm:text-sm text-olive-500 font-light max-w-md leading-[1.6]">
            {t.method.mobileIntro}
          </p>
          <p className="hidden lg:block text-xs sm:text-sm 2xl:text-base text-olive-500 font-light max-w-md leading-relaxed lg:text-right">
            {t.method.desktopIntro}
          </p>
        </div>

        {/* Central Asymmetric Editorial Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-9 items-stretch">
          
          {/* Main Visual Composition (Span 7-8) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div
              ref={imageFrameRef}
              className="relative w-full max-sm:aspect-[4/3] sm:max-lg:aspect-[16/10] lg:h-full lg:min-h-[300px] 2xl:min-h-[420px] rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg lg:shadow-2xl border border-sand-300/80 bg-sand-200 group"
            >
              <img
                ref={innerImgRef}
                src="/images/mera-method-image.jpg"
                alt={t.method.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover object-[58%_center] lg:object-center editorial-img-zoom will-change-transform"
              />
              
              {/* Warm Subtle Bottom Vignette to preserve golden sunbeams & shadows */}
              <div className="hidden lg:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-950/80 via-forest-950/25 to-transparent pointer-events-none"></div>

              {/* Floating Architectural Badge (Desktop only to keep mobile image clean) */}
              <div className="hidden lg:flex absolute top-4 left-4 sm:top-5 sm:left-5 bg-ivory/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sand-300/80 shadow-md items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-clay-300 animate-pulse"></span>
                <span className="editorial-caps text-[9px] sm:text-[9.5px] font-semibold text-forest-950">
                  {t.method.imageBadge}
                </span>
              </div>

              {/* Overlapping Statement (Desktop only so mobile photography remains pure) */}
              <div className="hidden lg:block absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-ivory space-y-1">
                <span className="editorial-caps text-[9px] text-sand-200 tracking-widest font-semibold block">
                  {t.method.imageQuoteEyebrow}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl xl:text-3xl font-light text-ivory leading-tight">
                  {t.method.imageQuoteStart}<span className="italic font-normal text-clay-200">{t.method.imageQuoteItalic}</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Three Method Pillars & Spring Calibration (Span 5-4) */}
          <div ref={textRef} className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-5 lg:gap-2.5 2xl:gap-4">
            
            {/* 3 Pillars Selector */}
            <div className="space-y-1 lg:space-y-1.5 2xl:space-y-2">
              <div className="hidden lg:flex items-center justify-between pb-1.5 border-b border-olive/15">
                <span className="editorial-caps text-[10px] font-bold text-clay-400 tracking-widest">
                  {t.method.pillarsHeader}
                </span>
                <span className="font-mono text-xs text-olive-400">
                  0{activePillar + 1} / 03
                </span>
              </div>

              <div className="max-lg:divide-y max-lg:divide-olive/15 max-lg:border-y max-lg:border-olive/15 lg:space-y-1.5 2xl:space-y-2">
                {pillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <div
                      key={pillar.num}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      onClick={() => setActivePillar(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActivePillar(idx);
                        }
                      }}
                      className={`max-lg:py-4 max-lg:px-0 lg:p-2.5 2xl:p-4 lg:rounded-xl lg:border transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 ${
                        isActive
                          ? 'lg:bg-ivory lg:border-olive-500 lg:shadow-md lg:translate-x-1'
                          : 'lg:bg-sand-100/50 lg:border-sand-300/80 lg:hover:bg-sand-100 lg:hover:border-sand-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5 lg:gap-3">
                          <span className={`font-mono text-xs font-semibold ${isActive ? 'text-clay-400' : 'text-sand-400'}`}>
                            {pillar.num}
                          </span>
                          <h4 className={`font-serif text-[19px] sm:text-lg 2xl:text-xl font-normal leading-snug ${isActive ? 'text-forest-950' : 'text-forest-950/70 lg:text-forest-950'}`}>
                            {pillar.title}
                          </h4>
                        </div>
                        <span className="text-xs text-clay-400 font-mono" aria-hidden="true">
                          {isActive ? '●' : '○'}
                        </span>
                      </div>

                      {isActive && (
                        <div className="mt-2 lg:mt-1.5 lg:pt-1.5 2xl:mt-2 2xl:pt-2 max-lg:pl-7 lg:border-t lg:border-sand-200 space-y-1 animate-in fade-in duration-300">
                          <p className="hidden lg:block font-serif italic text-xs 2xl:text-sm text-clay-400">
                            "{pillar.headline}"
                          </p>
                          <p className="text-[13.5px] lg:text-xs text-olive-500 font-light leading-[1.6] lg:leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tactile Spring Resistance Panel (Desktop only to keep mobile focused & uncluttered) */}
            <div className="hidden lg:block p-2.5 2xl:p-4 rounded-xl bg-sand-200/50 border border-sand-300/90 space-y-1.5 2xl:space-y-2 shrink-0">
              <div className="flex items-center justify-between text-xs">
                <span className="editorial-caps font-bold text-forest-950 text-[9.5px] max-sm:tracking-[0.16em]">
                  {t.method.springTitle}
                </span>
                <span className="hidden sm:inline font-mono text-[9.5px] text-clay-400 uppercase tracking-wider">
                  {t.method.springSubLabel}
                </span>
              </div>

              {/* Spring Selector Buttons */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-ivory rounded-lg border border-sand-300">
                {(['light', 'medium', 'heavy'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedSpring(key)}
                    aria-pressed={selectedSpring === key}
                    className={`py-2 lg:py-1.5 px-2 rounded-md text-[10px] lg:text-[9.5px] editorial-caps max-sm:tracking-[0.14em] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 ${
                      selectedSpring === key
                        ? 'bg-olive-400 text-ivory shadow-sm'
                        : 'text-forest-950 hover:text-clay-400'
                    }`}
                  >
                    {t.method.springLabels[key]}
                  </button>
                ))}
              </div>

              {/* Dynamic Readout */}
              <div className="space-y-1 lg:space-y-0.5 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-baseline justify-between text-xs font-semibold text-forest-950 gap-x-2 gap-y-0.5">
                  <span>{springs[selectedSpring].name}</span>
                  <span className="text-clay-400 text-[10px] lg:text-[9.5px] font-mono">{springs[selectedSpring].role}</span>
                </div>
                <p className="text-xs lg:text-[11px] text-olive-500 font-light leading-relaxed lg:leading-snug">
                  {springs[selectedSpring].note}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
