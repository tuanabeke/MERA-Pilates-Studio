import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLASS_FORMATS } from '../data/studioData';
import { ArrowRight, Flame, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SignatureClasses: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const selectedClass = CLASS_FORMATS[selectedIndex];
  const slides = selectedClass.images;
  const hasCarousel = slides.length > 1;
  const currentSlide = slides[activeSlideIndex] || slides[0];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
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

      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current.children,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          delay: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectClass = (idx: number) => {
    if (idx === selectedIndex) return;
    setActiveSlideIndex(0);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { opacity: 0.55, scale: 0.985 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
        );
      }
      if (detailsRef.current) {
        gsap.fromTo(
          detailsRef.current,
          { opacity: 0.65, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    }
    setSelectedIndex(idx);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleCarouselKeyDown = (e: React.KeyboardEvent) => {
    if (!hasCarousel) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNextSlide();
    }
  };

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="snap-scene relative min-h-[100svh] pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-[74px] lg:pb-5 2xl:pt-[82px] 2xl:pb-7 bg-forest-950 text-ivory overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Lighting Halos */}
      <div className="ambient-halo top-0 left-1/4 w-[600px] h-[600px] bg-olive-500/10 pointer-events-none"></div>
      <div className="ambient-halo bottom-0 right-10 w-[500px] h-[500px] bg-clay-400/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-4 lg:gap-2.5 2xl:gap-4">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 pb-2 2xl:pb-3.5 border-b border-white/10 shrink-0"
        >
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-clay-300 font-semibold tracking-widest uppercase">
                [ Practice Offerings ]
              </span>
              <span className="h-[1px] w-8 bg-clay-400"></span>
              <span className="editorial-caps text-[10px] text-sand-300 font-medium">
                Private & Small-Group Experiences
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[36px] 2xl:text-[48px] font-light text-ivory leading-[1.04] tracking-tight">
              Curated pathways <span className="italic font-normal text-sand-200">to strength.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm 2xl:text-base text-sand-300/80 font-light max-w-md leading-relaxed lg:text-right">
            Whether refining posture in private one-to-one coaching or moving in a quiet six-reformer group, 
            every offering is grounded in slow, deliberate control.
          </p>
        </div>

        {/* Minimalist Lookbook Navigation Tabs */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Practice offerings"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 border-b border-white/10 pb-2 2xl:pb-3 shrink-0"
        >
          {CLASS_FORMATS.map((cls, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={cls.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectClass(index)}
                className="text-left group pb-1 relative transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-200 rounded-sm"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`font-mono text-[11px] transition-colors duration-200 ${
                    isSelected ? 'text-clay-300 font-bold' : 'text-sand-400/60 group-hover:text-sand-200'
                  }`}>
                    0{index + 1}
                  </span>
                  <span className="editorial-caps text-[8.5px] text-sand-300/65 tracking-wider">
                    {cls.categoryBadge}
                  </span>
                </div>
                
                <h3 className={`font-serif text-base sm:text-lg lg:text-xl 2xl:text-2xl transition-colors duration-200 leading-tight ${
                  isSelected ? 'text-ivory font-normal' : 'text-sand-400/70 group-hover:text-ivory'
                }`}>
                  {cls.name}
                </h3>

                <span className="text-[10px] text-sand-300/50 block mt-0.5 line-clamp-1">
                  {cls.subtitle}
                </span>

                {isSelected && (
                  <span className="absolute -bottom-2 2xl:-bottom-3 left-0 right-0 h-[2px] bg-clay-300 animate-in fade-in duration-300"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Large Format Editorial Showcase */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* Main Visual Display / Carousel (Span 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              ref={imageContainerRef}
              tabIndex={hasCarousel ? 0 : -1}
              onKeyDown={handleCarouselKeyDown}
              aria-roledescription={hasCarousel ? 'carousel' : undefined}
              aria-label={hasCarousel ? `${selectedClass.name} studio photography` : undefined}
              className="relative w-full h-[340px] sm:h-[420px] lg:h-full lg:min-h-[280px] 2xl:min-h-[380px] rounded-2xl xl:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-forest-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
            >
              {/* Layered Slides for Silky Smooth Crossfade */}
              {slides.map((slide, sIdx) => {
                const isActiveSlide = sIdx === activeSlideIndex;
                return (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover ${
                      slide.objectPosition || 'object-center'
                    } transition-all duration-700 ease-out ${
                      isActiveSlide
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    }`}
                  />
                );
              })}

              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-black/20 pointer-events-none z-20"></div>

              {/* Floating Top Bar: Level Pill & Carousel Counter */}
              <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between gap-3 z-30">
                <div className="bg-forest-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sand-300/20 shadow-md">
                  <span className="editorial-caps text-[9.5px] font-semibold text-sand-200">
                    {selectedClass.level}
                  </span>
                </div>

                {hasCarousel && (
                  <div className="bg-forest-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-sand-300/20 shadow-md flex items-center gap-2">
                    <span className="font-mono text-[10px] text-sand-200 tracking-widest">
                      0{activeSlideIndex + 1} / 0{slides.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Carousel Navigation Arrows */}
              {hasCarousel && (
                <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-30">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    aria-label="Previous group reformer photograph"
                    className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-950/75 hover:bg-forest-950 text-ivory border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label="Next group reformer photograph"
                    className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-950/75 hover:bg-forest-950 text-ivory border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}

              {/* Bottom Quote & Carousel Dot Controls */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-ivory z-30 space-y-2">
                {currentSlide.caption && hasCarousel && (
                  <span className="editorial-caps text-[9px] text-clay-300 font-semibold tracking-widest block">
                    {currentSlide.caption}
                  </span>
                )}

                <p className="font-serif italic text-base sm:text-xl xl:text-2xl text-ivory max-w-lg leading-snug">
                  "{selectedClass.accentQuote}"
                </p>

                {hasCarousel && (
                  <div className="flex items-center gap-2 pt-0.5">
                    {slides.map((slide, sIdx) => {
                      const isActive = sIdx === activeSlideIndex;
                      return (
                        <button
                          key={slide.src}
                          type="button"
                          onClick={() => setActiveSlideIndex(sIdx)}
                          aria-label={`View group reformer photo ${sIdx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                            isActive
                              ? 'w-7 bg-clay-300'
                              : 'w-2 bg-ivory/40 hover:bg-ivory/75'
                          }`}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Information & Action (Span 7) */}
          <div ref={detailsRef} className="lg:col-span-7 flex flex-col justify-between py-0.5 gap-2 2xl:gap-4">
            <div className="space-y-1 2xl:space-y-2">
              <span className="editorial-caps text-[10px] font-semibold text-clay-300 tracking-widest block">
                {selectedClass.subtitle}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl text-ivory font-light leading-none">
                {selectedClass.name}
              </h4>
              <p className="text-xs sm:text-sm 2xl:text-base text-sand-200/80 font-light leading-relaxed pt-0.5 max-w-2xl">
                {selectedClass.description}
              </p>
            </div>

            {/* 2x2 Kinetic Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 2xl:gap-y-3 py-2 2xl:py-3.5 border-y border-white/10 text-xs">
              <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  Session Pacing
                </span>
                <span className="font-medium text-ivory">
                  {selectedClass.duration}
                </span>
              </div>

              <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  Intensity Level
                </span>
                <div className="flex items-center gap-1.5 text-clay-300">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <Flame
                      key={lvl}
                      className={`w-3.5 h-3.5 ${
                        lvl <= selectedClass.intensity ? 'fill-clay-300 text-clay-300' : 'text-sand-300/20'
                      }`}
                    />
                  ))}
                  <span className="font-mono text-xs text-sand-200 ml-1 font-medium">
                    Level {selectedClass.intensity}/5
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  Target Focus
                </span>
                <span className="font-medium text-ivory text-right sm:text-left">{selectedClass.focus}</span>
              </div>

              <div className="flex items-start justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  Spring Apparatus
                </span>
                <span className="font-medium text-ivory text-right sm:text-left">{selectedClass.springFocus}</span>
              </div>
            </div>

            {/* Key Benefits Pill List */}
            <div className="space-y-1.5 xl:space-y-2">
              <span className="editorial-caps text-[9.5px] text-sand-300 font-semibold tracking-wider block">
                Session Outcomes
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedClass.keyBenefits.map((benefit, bIdx) => (
                  <span
                    key={bIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 xl:py-1.5 rounded-full bg-forest-900 border border-sand-300/20 text-sand-200 text-xs font-light"
                  >
                    <Sparkles className="w-3 h-3 text-clay-300 shrink-0" />
                    <span>{benefit}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Timetable Navigation Action */}
            <div className="pt-1 flex items-center">
              <a
                href="#schedule"
                className="px-6 py-2.5 xl:px-7 xl:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-sand-200/40 text-sand-200 hover:text-ivory text-xs editorial-caps font-semibold transition-all inline-flex items-center justify-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
              >
                <span>View Weekly Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 text-clay-300 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
