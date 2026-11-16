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
      data-nav-theme-mobile="light"
      className="snap-scene relative lg:min-h-[100svh] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[74px] lg:pb-5 2xl:pt-[82px] 2xl:pb-7 max-lg:bg-ivory max-lg:text-forest-950 max-lg:border-t max-lg:border-olive/15 lg:bg-forest-950 lg:text-ivory overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Radial Accent */}
      <div className="hidden lg:block ambient-halo top-1/4 right-0 w-[550px] h-[550px] bg-clay-400/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-6 lg:gap-2.5 2xl:gap-5">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-3 pb-4 lg:pb-2 2xl:pb-3.5 border-b max-lg:border-olive/15 lg:border-white/10 shrink-0"
        >
          <div className="space-y-1.5 lg:space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 sm:gap-2.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full max-lg:bg-clay-400 lg:bg-clay-300"></span>
              <span className="editorial-caps text-[10px] max-sm:tracking-[0.18em] font-bold max-lg:text-olive lg:text-sand-300 tracking-[0.25em]">
                Atelier Commitments
              </span>
            </div>
            
            <h2 className="font-serif text-[2rem] sm:text-5xl lg:text-[36px] 2xl:text-[48px] font-light max-lg:text-forest-950 lg:text-ivory leading-[1.08] lg:leading-[1.04] tracking-tight">
              Invest in your body's <span className="italic font-normal max-lg:text-clay-400 lg:text-sand-200">architecture.</span>
            </h2>
          </div>
          
          <p className="hidden lg:block text-[13.5px] sm:text-sm 2xl:text-base text-sand-300/80 font-light max-w-md leading-[1.65] lg:leading-relaxed lg:text-right">
            Direct enrollment via WhatsApp concierge. Every tier includes our comprehensive 1-on-1 
            biomechanical assessment.
          </p>
          <p className="lg:hidden text-[13.5px] sm:text-sm text-charcoal/75 font-light max-w-md leading-[1.6]">
            Direct enrollment via WhatsApp concierge, including a 1-on-1 biomechanical assessment.
          </p>
        </div>

        {/* Membership Tier Cards */}
        <div
          ref={cardsRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-5 xl:gap-7 items-stretch"
        >
          {MEMBERSHIP_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const tierWhatsappUrl = getWhatsAppUrl(WHATSAPP_CONFIG.membershipInquiry(tier.name));

            return (
              <div
                key={tier.id}
                className={`group p-5 sm:p-6 lg:p-4 2xl:p-7 rounded-2xl xl:rounded-3xl flex flex-col justify-between border transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out md:hover:-translate-y-1.5 md:hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)] max-lg:bg-ivory-50 max-lg:border-sand-300/80 max-lg:text-forest-950 max-lg:shadow-sm ${
                  isPopular 
                    ? 'lg:bg-forest-900 lg:border-clay-300/50 lg:hover:border-clay-300/80 lg:shadow-2xl relative lg:text-ivory' 
                    : 'lg:bg-forest-900/55 lg:border-white/10 lg:hover:bg-forest-900/95 lg:hover:border-clay-300/50'
                }`}
              >
                <div className="space-y-3 lg:space-y-1.5 2xl:space-y-3.5">
                  
                  <div className="flex items-start justify-between gap-3 md:block space-y-0.5 2xl:space-y-1">
                    <div>
                      <span className="editorial-caps text-[9px] max-sm:tracking-[0.16em] font-bold transition-colors duration-300 block tracking-widest max-lg:text-clay-400 lg:text-clay-300 lg:group-hover:text-sand-200">
                        {tier.badge}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-2xl 2xl:text-3xl font-light transition-colors duration-300 leading-tight mt-0.5 max-lg:text-forest-950 lg:text-ivory lg:group-hover:text-sand-100">
                        {tier.name}
                      </h3>
                      <p className="text-xs font-light mt-0.5 max-lg:text-charcoal/70 lg:text-sand-300/70">
                        {tier.subtitle}
                      </p>
                    </div>

                    <div className="md:hidden text-right shrink-0">
                      <span className="font-serif text-3xl font-light leading-none block text-forest-950">
                        {tier.price}
                      </span>
                      <span className="editorial-caps text-[8.5px] tracking-[0.12em] block mt-1 text-charcoal/65">
                        {tier.cadence}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex items-baseline gap-2 pb-1.5 2xl:pb-3 border-b transition-colors duration-500 max-lg:border-olive/15 lg:border-white/10 lg:group-hover:border-clay-300/30">
                    <span className="font-serif text-3xl sm:text-4xl 2xl:text-5xl font-light leading-none transition-transform duration-500 ease-out group-hover:translate-x-0.5 max-lg:text-forest-950 lg:text-ivory">
                      {tier.price}
                    </span>
                    <span className="editorial-caps text-[9px] max-lg:text-charcoal/65 lg:text-sand-300/70">
                      / {tier.cadence}
                    </span>
                  </div>

                  <p className="hidden lg:block text-xs text-sand-200/80 font-light leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="space-y-1.5 lg:space-y-1 2xl:space-y-2 max-lg:pt-3 max-lg:border-t max-lg:border-olive/15 lg:pt-0.5">
                    <span className="hidden lg:block editorial-caps text-[9px] font-semibold text-sand-200 tracking-wider">
                      Privileges Included:
                    </span>
                    <ul className="space-y-2 lg:space-y-1 2xl:space-y-1.5">
                      {tier.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className={`${idx >= 3 ? 'hidden lg:flex' : 'flex'} items-start gap-2.5 lg:gap-2 text-[13px] lg:text-xs font-light max-lg:text-charcoal/85 lg:text-sand-200/90`}
                        >
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 max-lg:text-clay-400 lg:text-clay-300" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-4 mt-4 lg:pt-2 lg:mt-2 2xl:pt-4 2xl:mt-4 border-t transition-colors duration-500 max-lg:border-olive/15 lg:border-white/10 lg:group-hover:border-white/20">
                  <a
                    href={tierWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 lg:py-2 2xl:py-3.5 px-5 rounded-full text-xs editorial-caps max-sm:tracking-[0.16em] font-semibold border transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md lg:shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200 max-lg:bg-olive max-lg:text-ivory-50 max-lg:border-olive max-lg:hover:bg-olive-400 lg:bg-white/10 lg:text-ivory lg:border-white/10 lg:hover:bg-white/20 lg:hover:border-sand-300/35 lg:group-hover:bg-white/[0.14]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                    <span>{tier.cta || 'Inquire via WhatsApp'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Studio Assurance Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs max-lg:text-charcoal/75 lg:text-sand-300/80 gap-3 pt-3 lg:pt-2 2xl:pt-3.5 border-t max-lg:border-olive/15 lg:border-white/10 shrink-0">
          <div className="flex items-start sm:items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 max-lg:text-clay-400 lg:text-clay-300 shrink-0 mt-0.5 sm:mt-0" />
            <span className="leading-relaxed">Zero Lock-In: Pause, transfer, or adjust anytime with 14-day notice.</span>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_CONFIG.privateDuetInquiry())}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-caps text-[9.5px] max-sm:tracking-[0.14em] max-lg:text-forest-950 lg:text-clay-300 underline font-semibold hover:opacity-80 lg:hover:text-ivory transition-colors"
          >
            Inquire About Private 1-on-1 & Duet Reformer Sessions →
          </a>
        </div>

      </div>
    </section>
  );
};
