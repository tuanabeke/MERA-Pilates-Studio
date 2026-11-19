import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLASS_FORMATS } from '../data/studioData';
import { ArrowRight, Flame, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export const SignatureClasses: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const selectedClass = CLASS_FORMATS[selectedIndex];
  const selectedTranslated = t.classes.items[selectedClass.id];
  const slides = selectedClass.images;
  const hasCarousel = slides.length > 1;
  const currentSlide = slides[activeSlideIndex] || slides[0];
  const currentSlideTranslated = selectedTranslated?.slides[activeSlideIndex] || selectedTranslated?.slides[0];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const isMobile = window.matchMedia('(max-width: 1023px)').matches;

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: isMobile ? 16 : 20 },
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
          { opacity: 0, x: isMobile ? 0 : -16, y: isMobile ? 10 : 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            stagger: 0.06,
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
        { opacity: 0, y: isMobile ? 16 : 24, scale: isMobile ? 0.99 : 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isMobile ? 0.8 : 0.95,
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

  const getMobileObjectPosition = (src: string, fallback?: string) => {
    if (src.includes('Trainer-and-client')) return 'max-lg:object-[center_76%] ' + (fallback || 'object-center');
    if (src.includes('reformer-exercise-mermaid')) return 'max-lg:object-[42%_center] ' + (fallback || 'object-center');
    if (src.includes('studio-interior-arch')) return 'max-lg:object-[46%_48%] ' + (fallback || 'object-center');
    return fallback || 'object-center';
  };

  return (
    <section
      id="classes"
      data-nav-theme-mobile="light"
      ref={sectionRef}
      className="snap-scene relative lg:min-h-[100svh] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[74px] lg:pb-5 2xl:pt-[82px] 2xl:pb-7 max-lg:bg-ivory-50 max-lg:text-forest-950 max-lg:border-t max-lg:border-olive/10 lg:bg-forest-950 lg:text-ivory overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Lighting Halos (Desktop only) */}
      <div className="hidden lg:block ambient-halo top-0 left-1/4 w-[600px] h-[600px] bg-olive-500/10 pointer-events-none"></div>
      <div className="hidden lg:block ambient-halo bottom-0 right-10 w-[500px] h-[500px] bg-clay-400/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-6 lg:gap-2.5 2xl:gap-4">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-2.5 pb-4 lg:pb-2 2xl:pb-3.5 border-b max-lg:border-olive/15 lg:border-white/10 shrink-0"
        >
          <div className="space-y-1.5 lg:space-y-1 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-mono text-[10px] max-lg:text-clay-400 lg:text-clay-300 font-semibold tracking-widest uppercase">
                {t.classes.bracketLabel}
              </span>
              <span className="hidden sm:block h-[1px] w-8 bg-clay-400"></span>
              <span className="editorial-caps text-[10px] max-sm:tracking-[0.18em] max-lg:text-clay-400 max-lg:font-semibold lg:text-sand-300 font-medium">
                {t.classes.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-[2rem] sm:text-5xl lg:text-[36px] 2xl:text-[48px] font-light max-lg:text-forest-950 lg:text-ivory leading-[1.08] lg:leading-[1.04] tracking-tight">
              {t.classes.headingStart}<span className="italic font-normal max-lg:text-clay-400 lg:text-sand-200">{t.classes.headingItalic}</span>
            </h2>
          </div>

          <p className="lg:hidden text-[13.5px] sm:text-sm text-olive-500 font-light max-w-md leading-[1.6]">
            {t.classes.mobileIntro}
          </p>
          <p className="hidden lg:block text-xs sm:text-sm 2xl:text-base text-sand-300/80 font-light max-w-md leading-relaxed lg:text-right">
            {t.classes.desktopIntro}
          </p>
        </div>

        {/* Minimalist Lookbook Navigation Tabs */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label={t.classes.tablistAria}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:border-b max-lg:md:border-olive/15 lg:border-white/10 md:pb-2 2xl:pb-3 shrink-0"
        >
          {CLASS_FORMATS.map((cls, index) => {
            const isSelected = selectedIndex === index;
            const clsT = t.classes.items[cls.id];
            return (
              <button
                key={cls.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectClass(index)}
                className={`text-left group max-md:px-3.5 max-md:py-3 max-md:rounded-xl max-md:border md:pb-1 relative transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-200 md:rounded-sm ${
                  isSelected
                    ? 'max-md:bg-forest-950 max-md:border-forest-950 max-md:shadow-sm'
                    : 'max-md:bg-ivory max-md:border-sand-300/80'
                }`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`font-mono text-[10px] md:text-[11px] transition-colors duration-200 ${
                    isSelected ? 'max-md:text-clay-200 md:text-clay-300 font-bold' : 'max-md:text-clay-400 md:text-sand-400/60 group-hover:text-sand-200'
                  }`}>
                    0{index + 1}
                  </span>
                  <span className="hidden md:inline editorial-caps text-[8.5px] max-lg:text-olive-400 lg:text-sand-300/65 tracking-wider">
                    {clsT?.categoryBadge ?? cls.categoryBadge}
                  </span>
                </div>
                
                <h3 className={`font-serif text-[16px] sm:text-lg lg:text-xl 2xl:text-2xl transition-colors duration-200 leading-snug md:leading-tight ${
                  isSelected
                    ? 'max-md:text-ivory max-lg:md:text-forest-950 lg:text-ivory font-normal'
                    : 'max-md:text-forest-950 max-lg:md:text-olive-400 lg:text-sand-400/70 lg:group-hover:text-ivory'
                }`}>
                  {clsT?.name ?? cls.name}
                </h3>

                <span className="hidden md:block text-[10px] max-lg:text-olive-400 lg:text-sand-300/50 mt-0.5 line-clamp-1">
                  {clsT?.subtitle ?? cls.subtitle}
                </span>

                {isSelected && (
                  <span className="hidden md:block absolute -bottom-2 2xl:-bottom-3 left-0 right-0 h-[2px] bg-clay-300 animate-in fade-in duration-300"></span>
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
              aria-label={hasCarousel ? `${selectedTranslated?.name ?? selectedClass.name} ${t.classes.carouselAriaSuffix}` : undefined}
              className="relative w-full max-sm:aspect-[4/3] sm:max-lg:h-[360px] lg:h-full lg:min-h-[280px] 2xl:min-h-[380px] rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg lg:shadow-2xl border max-lg:border-sand-300/80 lg:border-white/10 bg-forest-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
            >
              {/* Layered Slides for Silky Smooth Crossfade */}
              {slides.map((slide, sIdx) => {
                const isActiveSlide = sIdx === activeSlideIndex;
                const slideAlt = selectedTranslated?.slides[sIdx]?.alt ?? slide.alt;
                return (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slideAlt}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover ${
                      getMobileObjectPosition(slide.src, slide.objectPosition)
                    } transition-all duration-700 ease-out ${
                      isActiveSlide
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    }`}
                  />
                );
              })}

              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 lg:from-forest-950/70 via-transparent to-black/10 pointer-events-none z-20"></div>

              {/* Floating Top Bar: Level Pill & Carousel Counter */}
              <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between gap-2 z-30">
                <div className="bg-forest-950/80 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-sand-300/20 shadow-md">
                  <span className="editorial-caps text-[9px] sm:text-[9.5px] max-sm:tracking-[0.14em] font-semibold text-sand-200">
                    {selectedTranslated?.level ?? selectedClass.level}
                  </span>
                </div>

                {hasCarousel && (
                  <div className="bg-forest-950/80 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-sand-300/20 shadow-md flex items-center gap-2">
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
                    aria-label={t.classes.prevPhotoAria}
                    className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-950/75 hover:bg-forest-950 text-ivory border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label={t.classes.nextPhotoAria}
                    className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-950/75 hover:bg-forest-950 text-ivory border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}

              {/* Bottom Quote & Carousel Dot Controls */}
              <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-ivory z-30 space-y-1.5 sm:space-y-2">
                {(currentSlideTranslated?.caption || currentSlide.caption) && hasCarousel && (
                  <span className="hidden lg:block editorial-caps text-[9px] text-clay-300 font-semibold tracking-widest">
                    {currentSlideTranslated?.caption ?? currentSlide.caption}
                  </span>
                )}

                <p className="hidden lg:block font-serif italic text-base sm:text-xl xl:text-2xl text-ivory max-w-lg leading-snug">
                  "{selectedTranslated?.accentQuote ?? selectedClass.accentQuote}"
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
                          aria-label={t.classes.viewPhotoAria(sIdx + 1)}
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
          <div ref={detailsRef} className="lg:col-span-7 flex flex-col justify-between py-0.5 gap-4 lg:gap-2 2xl:gap-4">
            <div className="space-y-1.5 lg:space-y-1 2xl:space-y-2">
              <span className="editorial-caps text-[10px] max-sm:tracking-[0.16em] font-semibold max-lg:text-clay-400 lg:text-clay-300 tracking-widest block">
                {selectedTranslated?.subtitle ?? selectedClass.subtitle}
              </span>
              <h4 className="font-serif text-[1.85rem] sm:text-3xl xl:text-4xl 2xl:text-5xl max-lg:text-forest-950 lg:text-ivory font-light leading-tight lg:leading-none">
                {selectedTranslated?.name ?? selectedClass.name}
              </h4>
              <p className="text-[13.5px] sm:text-sm 2xl:text-base max-lg:text-olive-500 lg:text-sand-200/80 font-light leading-[1.65] lg:leading-relaxed pt-1 lg:pt-0.5 max-w-2xl">
                {selectedTranslated?.description ?? selectedClass.description}
              </p>
            </div>

            {/* Mobile Minimal Metadata Bar (< lg) */}
            <div className="lg:hidden flex items-center justify-between py-3.5 border-y border-olive/15 text-xs">
              <div className="flex items-center gap-2">
                <span className="editorial-caps text-[9.5px] tracking-[0.14em] text-olive-400 font-semibold">
                  {t.classes.mobileDuration}
                </span>
                <span className="font-medium text-forest-950 text-[13px]">
                  {selectedTranslated?.duration ?? selectedClass.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="editorial-caps text-[9.5px] tracking-[0.14em] text-olive-400 font-semibold">
                  {t.classes.mobileIntensity}
                </span>
                <div className="flex items-center gap-1 text-clay-400">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <Flame
                      key={lvl}
                      className={`w-3.5 h-3.5 ${
                        lvl <= selectedClass.intensity ? 'fill-clay-400 text-clay-400' : 'text-sand-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop 2x2 Kinetic Metrics Grid (lg+) */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 2xl:gap-y-3 py-2 2xl:py-3.5 border-y border-white/10 text-xs">
              <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  {t.classes.desktopPacing}
                </span>
                <span className="font-medium text-ivory">
                  {selectedTranslated?.duration ?? selectedClass.duration}
                </span>
              </div>

              <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  {t.classes.desktopIntensity}
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
                    {t.classes.levelOfFive(selectedClass.intensity)}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  {t.classes.desktopTargetFocus}
                </span>
                <span className="font-medium text-ivory text-right sm:text-left">{selectedTranslated?.focus ?? selectedClass.focus}</span>
              </div>

              <div className="flex items-start justify-between sm:flex-col sm:items-start gap-1">
                <span className="editorial-caps text-[9.5px] text-sand-300/75 font-semibold tracking-wider">
                  {t.classes.desktopSpringApparatus}
                </span>
                <span className="font-medium text-ivory text-right sm:text-left">{selectedTranslated?.springFocus ?? selectedClass.springFocus}</span>
              </div>
            </div>

            {/* Key Benefits List (Desktop only to keep mobile clean & concise) */}
            <div className="hidden lg:block space-y-1.5 xl:space-y-2">
              <span className="editorial-caps text-[9.5px] text-sand-300 font-semibold tracking-wider block">
                {t.classes.desktopOutcomes}
              </span>
              <div className="flex flex-wrap gap-2">
                {(selectedTranslated?.keyBenefits ?? selectedClass.keyBenefits).map((benefit, bIdx) => (
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
                className="max-sm:w-full px-6 py-3.5 lg:py-2.5 xl:px-7 xl:py-3.5 rounded-full max-lg:bg-forest-950 max-lg:text-ivory max-lg:shadow-md lg:bg-white/10 lg:hover:bg-white/20 lg:border lg:border-white/15 lg:hover:border-sand-200/40 lg:text-sand-200 lg:hover:text-ivory text-xs editorial-caps max-sm:tracking-[0.16em] font-semibold transition-all inline-flex items-center justify-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
              >
                <span>{t.classes.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 max-lg:text-sand-200 lg:text-clay-300 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
