import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Instagram, MessageCircle, ArrowUpRight, Clock } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const locationCardRef = useRef<HTMLDivElement>(null);
  const colophonRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = getWhatsAppUrl("Hello MERA Studio, I would like to inquire about your reformer schedule and memberships.");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        locationCardRef.current,
        { opacity: 0, y: 24, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo(
        colophonRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="location"
      ref={footerRef}
      className="snap-scene bg-forest-950 text-ivory pt-20 sm:pt-24 lg:pt-[86px] xl:pt-[90px] pb-8 lg:pb-7 border-t border-white/10 relative overflow-hidden min-h-[100svh] flex flex-col justify-between"
    >
      {/* Ambient Halo */}
      <div className="ambient-halo bottom-0 left-1/3 w-[500px] h-[500px] bg-olive-500/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-8">
        
        {/* Top / Main Showcase: SoHo Atelier Location & Sanctuary Visit */}
        <div ref={locationCardRef} className="my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 xl:p-12 rounded-3xl bg-forest-900 border border-white/10 shadow-2xl">
            
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-clay-300"></span>
                <span className="editorial-caps text-[10px] font-bold text-sand-300 tracking-[0.25em]">
                  SoHo Atelier Location
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-light text-ivory leading-[1.04]">
                482 Broome Street, <br />
                <span className="italic font-normal text-sand-200">SoHo, New York.</span>
              </h2>

              <p className="text-xs sm:text-sm xl:text-base text-sand-300/80 font-light max-w-lg leading-relaxed pt-0.5">
                Nestled on the quiet second floor above Broome Street, between West Broadway and Wooster. 
                A private haven designed to quiet urban noise and return you to pure kinetic focus.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <a
                  href="https://maps.google.com/?q=482+Broome+St+New+York+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs editorial-caps text-ivory font-semibold transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-clay-300" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello MERA Studio, I would like to schedule a visit to the SoHo atelier.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ivory text-forest-950 hover:bg-sand-100 text-xs editorial-caps font-semibold transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>Concierge Visit Request</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-clay-300 text-xs">
                  <Clock className="w-4 h-4" />
                  <span className="editorial-caps text-[10px] font-bold tracking-widest">
                    Practice Hours
                  </span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-sand-200 font-light">
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-ivory">06:30 AM – 08:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span>Saturday & Sunday</span>
                    <span className="font-medium text-ivory">08:00 AM – 06:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-clay-300 text-xs">
                  <Mail className="w-4 h-4" />
                  <span className="editorial-caps text-[10px] font-bold tracking-widest">
                    Direct Contact
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-sand-200 font-light">
                  concierge@merastudio.com • Strictly 6 reformers per session
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Editorial Brand Statement & Colophon */}
        <div ref={colophonRef} className="shrink-0 space-y-5 pt-5 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Brand Identity (Span 4) */}
            <div className="lg:col-span-4 flex items-center gap-4">
              <img
                src="/images/mera-monogram-white.png"
                alt="MERA Studio Monogram"
                className="h-8 w-auto object-contain"
              />
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl tracking-[0.2em] text-ivory uppercase font-light leading-none">
                    MERA
                  </span>
                  <span className="text-sand-500">•</span>
                  <span className="font-serif italic text-lg text-sand-200 font-light leading-none">
                    Where breath shapes form.
                  </span>
                </div>
                <span className="text-[8.5px] uppercase tracking-[0.3em] text-sand-300/70 font-medium block mt-1">
                  Reformer Studio — 482 Broome St, SoHo, NY 10013
                </span>
              </div>
            </div>

            {/* Navigation Links (Span 5) */}
            <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-center gap-x-6 gap-y-2 text-xs text-sand-300/80 font-light">
              <a href="#the-method" className="hover:text-ivory transition-colors editorial-caps text-[10px]">The Method</a>
              <a href="#classes" className="hover:text-ivory transition-colors editorial-caps text-[10px]">Classes</a>
              <a href="#sanctuary" className="hover:text-ivory transition-colors editorial-caps text-[10px]">The Sanctuary</a>
              <a href="#instructors" className="hover:text-ivory transition-colors editorial-caps text-[10px]">Instructors</a>
              <a href="#schedule" className="hover:text-ivory transition-colors editorial-caps text-[10px]">Schedule</a>
              <a href="#membership" className="hover:text-ivory transition-colors editorial-caps text-[10px]">Membership</a>
            </div>

            {/* Direct Concierge CTA (Span 3) */}
            <div className="lg:col-span-3 flex lg:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-[11px] editorial-caps font-semibold shadow-lg hover:bg-[#20bd5a] active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Concierge</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Bottom Legal & Social Row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400/60 gap-3">
            <p>© {new Date().getFullYear()} MERA Reformer Studio. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-[11px]">
              <a href="#" className="hover:text-sand-200 transition-colors">Privacy</a>
              <a href="#" className="hover:text-sand-200 transition-colors">Terms of Atelier</a>
              <span className="text-sand-500">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sand-200 transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@merareformer</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
