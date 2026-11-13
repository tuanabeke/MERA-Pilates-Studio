import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MEMBERSHIP_TIERS } from '../data/studioData';
import { Check, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../config/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export const MembershipSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards triptych elevation stagger (clear inline transform on complete so CSS hover lift works smoothly)
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 84%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="snap-scene relative min-h-[100svh] pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-[74px] lg:pb-5 2xl:pt-[82px] 2xl:pb-7 bg-forest-950 text-ivory overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Radial Accent */}
      <div className="ambient-halo top-1/4 right-0 w-[550px] h-[550px] bg-clay-400/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-4 lg:gap-2.5 2xl:gap-5">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 pb-2 2xl:pb-3.5 border-b border-white/10 shrink-0"
        >
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-clay-300"></span>
              <span className="editorial-caps text-[10px] font-bold text-sand-300 tracking-[0.25em]">
                Atelier Commitments
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[36px] 2xl:text-[48px] font-light text-ivory leading-[1.04] tracking-tight">
              Invest in your body's <span className="italic font-normal text-sand-200">architecture.</span>
            </h2>
          </div>
          
          <p className="text-xs sm:text-sm 2xl:text-base text-sand-300/80 font-light max-w-md leading-relaxed lg:text-right">
            Direct enrollment via WhatsApp concierge. Every tier includes our comprehensive 1-on-1 
            biomechanical assessment.
          </p>
        </div>

        {/* Membership Tier Cards */}
        <div
          ref={cardsRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 xl:gap-7 items-stretch"
        >
          {MEMBERSHIP_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const tierWhatsappUrl = getWhatsAppUrl(WHATSAPP_CONFIG.membershipInquiry(tier.name));

            return (
              <div
                key={tier.id}
                className={`group p-4 sm:p-5 lg:p-4 2xl:p-7 rounded-2xl xl:rounded-3xl flex flex-col justify-between border transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)] ${
                  isPopular 
                    ? 'bg-forest-900 border-clay-300/45 hover:border-clay-300/80 shadow-2xl relative' 
                    : 'bg-forest-900/60 border-white/10 hover:bg-forest-900/95 hover:border-clay-300/50'
                }`}
              >
                <div className="space-y-1.5 2xl:space-y-3.5">
                  
                  <div className="space-y-0.5 2xl:space-y-1">
                    <span className="editorial-caps text-[9px] font-bold text-clay-300 transition-colors duration-300 group-hover:text-sand-200 block tracking-widest">
                      {tier.badge}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl 2xl:text-3xl font-light text-ivory transition-colors duration-300 group-hover:text-sand-100 leading-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-sand-300/70 font-light">
                      {tier.subtitle}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 pb-1.5 2xl:pb-3 border-b border-white/10 transition-colors duration-500 group-hover:border-clay-300/30">
                    <span className="font-serif text-3xl sm:text-4xl 2xl:text-5xl font-light text-ivory leading-none transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                      {tier.price}
                    </span>
                    <span className="editorial-caps text-[9px] text-sand-300/70">
                      / {tier.cadence}
                    </span>
                  </div>

                  <p className="text-xs text-sand-200/80 font-light leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="space-y-1 2xl:space-y-2 pt-0.5">
                    <span className="editorial-caps text-[9px] font-semibold text-sand-200 block tracking-wider">
                      Privileges Included:
                    </span>
                    <ul className="space-y-1 2xl:space-y-1.5">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-sand-200/90 font-light">
                          <Check className="w-3.5 h-3.5 text-clay-300 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-2 mt-2 2xl:pt-4 2xl:mt-4 border-t border-white/10 transition-colors duration-500 group-hover:border-white/20">
                  <a
                    href={tierWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 2xl:py-3.5 px-5 rounded-full text-xs editorial-caps font-semibold bg-white/10 text-ivory border border-white/10 hover:bg-white/20 hover:border-sand-300/35 group-hover:bg-white/[0.14] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Studio Assurance Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-sand-300/80 gap-3 pt-2 2xl:pt-3.5 border-t border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-clay-300" />
            <span>Zero Lock-In: Pause, transfer, or adjust anytime with 14-day notice.</span>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_CONFIG.privateDuetInquiry())}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-caps text-[9.5px] text-clay-300 underline font-semibold hover:text-ivory transition-colors"
          >
            Inquire About Private 1-on-1 & Duet Reformer Sessions →
          </a>
        </div>

      </div>
    </section>
  );
};
