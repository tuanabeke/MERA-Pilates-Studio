import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, VolumeX, Shield, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const StudioSanctuary: React.FC = () => {
  const sanctuaryRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const scaleImageWrapperRef = useRef<HTMLDivElement>(null);
  const innerImgRef = useRef<HTMLImageElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const sanctuaryPillars = [
    {
      icon: Sun,
      label: 'Circadian Light',
      title: 'Arched Casement Windows',
      desc: '14-foot architectural apertures welcoming soft, natural morning daylight without harsh synthetic glare.'
    },
    {
      icon: VolumeX,
      label: 'Acoustic Serenity',
      title: 'Mineral Lime Plaster',
      desc: 'Natural lime coating absorbs urban noise, creating an acoustic cocoon where the only rhythm is your breath.'
    },
    {
      icon: Shield,
      label: 'Intimate Scale',
      title: 'Strictly 6 Reformers',
      desc: 'We permanently capped atelier capacity at six. You are never crowded, rushed, or lost in the background.'
    },
    {
      icon: Sparkles,
      label: 'Botanical Craft',
      title: 'Hinoki & Smoked Sage',
      desc: 'Organic essential oils continuously diffused to open airways and trigger autonomic nervous system calm.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sanctuaryRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Cinematic panoramic aperture expansion
      if (scaleImageWrapperRef.current) {
        gsap.fromTo(
          scaleImageWrapperRef.current,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sanctuaryRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      if (innerImgRef.current) {
        gsap.fromTo(
          innerImgRef.current,
          { scale: 1.08 },
          {
            scale: 1,
            duration: 1.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sanctuaryRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      // Features stagger wave
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sanctuaryRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sanctuaryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sanctuary"
      ref={sanctuaryRef}
      className="snap-scene relative min-h-[100svh] pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-[74px] lg:pb-5 2xl:pt-[84px] 2xl:pb-8 bg-olive-900 text-ivory overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Lighting Accents */}
      <div className="ambient-halo top-20 right-0 w-[550px] h-[550px] bg-clay-300/10 pointer-events-none"></div>
      <div className="ambient-halo bottom-10 left-0 w-[500px] h-[500px] bg-sage-300/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-5 lg:gap-4 2xl:gap-7">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-3 2xl:pb-4 border-b border-olive-800 shrink-0"
        >
          <div className="space-y-1 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-clay-300"></span>
              <span className="editorial-caps text-[10px] font-semibold text-sand-300 tracking-widest">
                The Physical Sanctuary
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[36px] xl:text-[42px] 2xl:text-[50px] font-light text-ivory leading-[1.04] tracking-tight">
              An architectural space <span className="italic text-sand-200 font-normal">engineered for restoration.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm 2xl:text-base text-sand-300/85 font-light max-w-md leading-relaxed lg:text-right">
            Located on Broome Street in SoHo. Every tactile material—from mineral lime plaster to hand-finished white oak—is 
            chosen to calm sensory fatigue and return you to natural equilibrium.
          </p>
        </div>

        {/* Balanced Architectural Spread: Natural-Proportion Studio Photograph + Breathing 2x2 Sensory Pillars */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 xl:gap-9 items-stretch my-auto">
          
          {/* Left Column: Natural 16:10 / 16:9 Architectural Studio Photograph (Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              ref={scaleImageWrapperRef}
              className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[340px] xl:min-h-[380px] 2xl:min-h-[450px] rounded-2xl xl:rounded-3xl overflow-hidden shadow-2xl border border-olive-800 will-change-transform group"
            >
              <img
                ref={innerImgRef}
                src="/images/studio-interior-wide.jpg"
                alt="MERA Reformer Studio interior showing solid white oak reformers, arched window and recessed illuminated niche"
                loading="lazy"
                className="w-full h-full object-cover object-center editorial-img-zoom will-change-transform"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-olive-900/95 via-olive-900/35 to-transparent pointer-events-none"></div>

              {/* Floating Architectural Annotation */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col xl:flex-row xl:items-end justify-between gap-2.5 text-ivory">
                <div className="space-y-1">
                  <span className="editorial-caps text-[9.5px] text-sand-200 font-semibold tracking-widest block">
                    The Main Atelier • 482 Broome Street, SoHo
                  </span>
                  <p className="font-serif italic text-xl sm:text-2xl 2xl:text-3xl text-ivory font-light leading-tight">
                    "Where warm shadows dance against mineral lime plaster."
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-[11px] text-sand-200/90 font-medium shrink-0">
                  <span>Circadian Light</span>
                  <span aria-hidden="true">•</span>
                  <span>Solid Oak Frames</span>
                  <span aria-hidden="true">•</span>
                  <span>Acoustic Serenity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spacious 2x2 Atmospheric Sensory Pillars (Span 5) */}
          <div
            ref={featuresRef}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 xl:gap-4 2xl:gap-5 items-stretch"
          >
            {sanctuaryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 lg:p-4 xl:p-5 2xl:p-6 rounded-2xl bg-forest-950/35 border border-olive-800/90 hover:border-clay-300/40 transition-colors duration-300 flex flex-col justify-between gap-2.5 group"
                >
                  <div className="space-y-2 2xl:space-y-3">
                    <div className="flex items-center gap-2.5 text-clay-200">
                      <Icon className="w-4 h-4 text-clay-200 shrink-0" />
                      <span className="editorial-caps text-[9.5px] font-semibold text-sand-300 tracking-wider">
                        {pillar.label}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg xl:text-xl 2xl:text-2xl text-ivory font-light group-hover:text-sand-200 transition-colors leading-snug">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs 2xl:text-sm text-sand-300/85 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
