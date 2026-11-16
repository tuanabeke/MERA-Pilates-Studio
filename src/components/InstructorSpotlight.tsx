import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { INSTRUCTORS, Instructor } from '../data/studioData';
import { Quote, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export const InstructorSpotlight: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor>(INSTRUCTORS[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = getWhatsAppUrl(`Hello MERA Studio, I would like to inquire about a private 1-on-1 reformer session with ${selectedInstructor.name}.`);

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
          }
        }
      );

      gsap.fromTo(
        portraitFrameRef.current,
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      const isMobile = window.matchMedia('(max-width: 1023px)').matches;

      gsap.fromTo(
         infoRef.current,
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
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectInstructor = (inst: Instructor) => {
    if (inst.id === selectedInstructor.id) return;
    if (portraitFrameRef.current) {
      gsap.fromTo(
        portraitFrameRef.current,
        { opacity: 0.7, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0.7, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }
    setSelectedInstructor(inst);
  };

  return (
    <section
      id="instructors"
      data-nav-theme="light"
      ref={sectionRef}
      className="snap-scene relative lg:min-h-[100svh] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[78px] lg:pb-6 2xl:pt-[86px] 2xl:pb-8 bg-ivory text-forest-950 overflow-hidden flex flex-col justify-center"
    >
      <div className="relative w-full max-w-[1560px] lg:max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 my-auto flex flex-col gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-3.5 lg:gap-4 pb-4 lg:pb-4 xl:pb-5 border-b border-olive/15 shrink-0"
        >
          <div className="space-y-1.5 lg:space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-mono text-[10px] text-clay-400 font-semibold tracking-widest uppercase">
                [ Movement Directors ]
              </span>
              <span className="hidden sm:block h-[1px] w-8 bg-clay-300"></span>
              <span className="editorial-caps text-[10px] max-sm:tracking-[0.18em] text-clay-400 sm:text-olive-500 font-semibold">
                Anatomical Leadership
              </span>
            </div>

            <h2 className="font-serif text-[2rem] sm:text-5xl lg:text-[40px] xl:text-[44px] 2xl:text-[50px] font-light text-forest-950 leading-[1.08] lg:leading-[1.04] tracking-tight">
              Guided by scholars <span className="italic font-normal text-clay-400">of biomechanics.</span>
            </h2>
          </div>

          <p className="hidden lg:block text-xs sm:text-sm 2xl:text-base text-olive-500 font-light max-w-md leading-relaxed lg:text-right">
            Former classical soloists, kinesiology researchers, and physical rehabilitation specialists. 
            Every session offers continuous anatomical calibration.
          </p>
        </div>

        {/* Balanced Editorial Master Profile Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-9 xl:gap-12 items-center max-lg:p-0 lg:p-7 xl:p-9 2xl:p-11 lg:rounded-3xl lg:bg-sand-100/55 lg:border lg:border-sand-300/80 lg:shadow-xl">
          
          {/* Balanced Portrait Display (Span 5 on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch">
            <div
              ref={portraitFrameRef}
              className="relative w-full max-sm:aspect-[4/4.4] sm:max-lg:h-[380px] lg:max-w-none lg:h-[440px] xl:h-[470px] 2xl:h-[520px] rounded-2xl overflow-hidden shadow-lg lg:shadow-xl border border-sand-300 bg-sand-200 group"
            >
              <img
                src={selectedInstructor.image}
                alt={selectedInstructor.name}
                key={selectedInstructor.id}
                loading="lazy"
                className="w-full h-full object-cover object-[center_16%] lg:object-[center_18%] editorial-img-zoom transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 lg:bottom-6 lg:left-6 lg:right-6 text-ivory space-y-0.5 lg:space-y-1">
                <span className="editorial-caps text-[8.5px] lg:text-[9.5px] max-sm:tracking-[0.16em] text-sand-200 font-semibold tracking-widest block">
                  {selectedInstructor.specialty}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl 2xl:text-4xl text-ivory font-light leading-tight">
                  {selectedInstructor.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Cohesive Details & WhatsApp Interaction (Span 7 on Desktop) */}
          <div ref={infoRef} className="lg:col-span-7 flex flex-col justify-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
            
            {/* Instructor Quick Selector Pills */}
            <div className="space-y-1.5 lg:space-y-2">
              <span className="hidden lg:block editorial-caps text-[9.5px] font-bold text-clay-400 tracking-widest">
                Select Director
              </span>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 lg:gap-2.5">
                {INSTRUCTORS.map((inst) => {
                  const isSelected = selectedInstructor.id === inst.id;
                  return (
                    <button
                      key={inst.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => handleSelectInstructor(inst)}
                      className={`px-2.5 sm:px-3.5 lg:px-4 py-2.5 sm:py-2 lg:py-2.5 rounded-full text-[10.5px] sm:text-[11px] editorial-caps max-sm:tracking-[0.12em] font-semibold transition-colors duration-300 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 ${
                        isSelected
                          ? 'bg-olive text-ivory-50 border border-olive shadow-sm lg:shadow-md'
                          : 'bg-ivory border border-sand-300/80 text-forest-950 hover:bg-sand-200/70'
                      }`}
                    >
                      <span className="max-sm:hidden">{inst.name}</span>
                      <span className="sm:hidden">{inst.name.split(' ')[0]}</span>
                      <span className="hidden sm:inline opacity-75 ml-1.5 font-normal font-sans">
                        ({inst.title.split('&')[0].trim()})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Title & Biography */}
            <div className="space-y-2 lg:space-y-2.5 xl:space-y-3">
              <h4 className="font-serif text-[1.5rem] sm:text-3xl xl:text-4xl text-forest-950 font-light leading-tight">
                {selectedInstructor.title}
              </h4>
              <p className="text-[13.5px] sm:text-sm xl:text-[15px] text-olive-500 font-light leading-[1.65] lg:leading-[1.7] max-w-2xl">
                {selectedInstructor.bio}
              </p>
            </div>

            {/* Teaching Philosophy Quote (Desktop only to reduce mobile copy density) */}
            <div className="hidden lg:block p-4 xl:p-5 rounded-xl bg-ivory/85 border border-sand-300/80 space-y-1.5">
              <div className="flex items-center gap-2 text-clay-400">
                <Quote className="w-3.5 h-3.5" />
                <span className="editorial-caps text-[9px] font-semibold text-olive-500 tracking-wider">
                  Movement Philosophy
                </span>
              </div>
              <p className="font-serif italic text-base sm:text-lg xl:text-xl text-forest-950 leading-snug">
                "{selectedInstructor.quote}"
              </p>
            </div>

            {/* Credentials & Direct WhatsApp Concierge CTA */}
            <div className="pt-3 lg:pt-4 xl:pt-5 border-t border-olive/15 flex flex-col xl:flex-row xl:items-end justify-between gap-4 lg:gap-4">
              <div className="hidden lg:block space-y-2">
                <span className="editorial-caps text-[9px] font-bold text-olive-400 tracking-widest block">
                  Credentials & Mastery
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedInstructor.credentials.map((cred, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ivory border border-sand-300 text-forest-950 text-[11px] font-medium"
                    >
                      <Sparkles className="w-3 h-3 text-clay-400 shrink-0" />
                      <span>{cred}</span>
                    </span>
                  ))}
                </div>
              </div>

              <p className="lg:hidden text-xs text-olive-500 font-medium">
                {selectedInstructor.credentials[0]} • {selectedInstructor.credentials[1]}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="max-sm:w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 lg:py-3.5 xl:px-7 xl:py-3.5 rounded-full bg-olive text-ivory-50 hover:bg-olive-400 text-xs editorial-caps max-sm:tracking-[0.15em] font-semibold shadow-md lg:shadow-lg transition-colors duration-300 group active:scale-95 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] shrink-0" />
                <span>Inquire Private Session with {selectedInstructor.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
